import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = (req.headers.authorization  || '').replace(/Bearer\s?/, '');

    if (token){
      try{
          const decoder = jwt.verify(token, 'secret123');
          req.userId = decoder._id;
          next();
      }
      catch (err){
        return res.status(403).json({
          massage: 'No dostupT',
        })
      }
    }
    else {
     return res.status(403).json({
        massage: 'No dostup',
      })
    }
}