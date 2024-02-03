import TaskModel from "../models/Task.js";


export const getAll = async (req, res) => {
  try{
    const tasks = await TaskModel.find().populate('user').exec();

    res.json(tasks);
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      message: " Не удалось получить задачу 1",
    })
  }
}

export const getOne = async (req, res) => {
  try{
    const taskId = req.params.id;
    const task = await TaskModel.findOne({
      _id: taskId,
    });
    if (!task) {
      return res.status(404).json({ 
        message: 'Задача не найдена' 
      });
    }
        res.json(task);
      }
    

  
  catch(err){
    console.log(err);
    res.status(500).json({
      message: " Не удалось получить задачу 2",
    })
  }
}

export const remove = async (req, res) => {
  try{
    const taskId = req.params.id;
    const taskk = await TaskModel.findOneAndDelete({
      _id: taskId,
    }); 
    if (!taskk) {
      return res.status(404).json({
        message: 'Не удалось найти задачу 3'
      });
    }

    res.json({
      success: true,
    });

      }
  catch(err){
    console.log(err);
    res.status(500).json({
      message: " Не удалось найти задачу при удалении",
    })
  }
}

export const create = async (req, res) => {
  try{
    const doc = new TaskModel({
      // User request
        title: req.body.title,
        description: req.body.description,
        dateEnd: req.body.dateEnd,
      // User request
      // Back request
        user: req.userId,
    });

    const task = await doc.save();

    res.json(task);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({
      message: " Не удалось создать новую задачу 4",
    })
  }
}

export const update = async (req, res) => {
  try{
    const taskId = req.params.id;
    
    await TaskModel.updateOne({

      _id: taskId,
    },
    {
      title: req.body.title,
      description: req.body.description,
      dateEnd: req.body.dateEnd,
    // User request
    // Back request
      user: req.userId,
    }
    );
    res.json({
      message: "задача обнавлена",
    });
  }
  catch (err){
    console.log(err);
    res.status(500).json({
      message: "Не удалось найти задачу для обновления"
    });
  }
}