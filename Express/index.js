import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';


import { registerValidaton, loginValidaton } from './validations/auth.js';
import { createValidation } from './validations/Taskvalid/createValidation.js';
import { UserContorller, TaskController} from './controllers/index.js';
import { checkAuth, validationErrors} from './utils/index.js'


mongoose
.connect('mongodb+srv://nafissafiullin2004:wwwwww@cluster0.sj3yp8e.mongodb.net/taskMenegment?retryWrites=true&w=majority')
.then(() => console.log('DB is connected'))
.catch((err) => console.log('DB NOT OK', err));


const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const PORT = 4444;
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get ('/api', (req, res) => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];
  res.json(data);
})

app.post('/auth/register', registerValidaton, validationErrors, UserContorller. register)
app.post('/auth/login', loginValidaton, validationErrors, UserContorller.login );
app.get('/auth/me', checkAuth, UserContorller.getMe);


app.post('/upload', upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});


// app.get('/task', checkAuth, TaskController.getAll);
app.get('/task',checkAuth, TaskController.getAll);
app.post('/task',checkAuth,  createValidation, validationErrors, TaskController.create);
app.get('/task/:id',checkAuth, TaskController.getOne);
app.delete('/task/:id',checkAuth, TaskController.remove);
app.patch('/task/:id', checkAuth, createValidation, validationErrors, TaskController.update);

app.listen(PORT, (err) => {
  if (err){
    return console.log(err);
  }
  else {
    console.log('Server OK')
  }
});

