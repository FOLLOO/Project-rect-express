import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: async function (email) {
        const user = await this.constructor.findOne({ email });
        return !user;
      },
      message: 'Email is already taken',
    },
  },
  passwordHash: {
    type: String,
    require: true,
  },
  avatarUrl: String,
}, 
{
timeseries: true,
}
);


export default mongoose.model('User', UserSchema);