import mongoose from 'mongoose';
import { userConstraints } from '../configs/constraints';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: userConstraints.username.minLength,
      maxLength: userConstraints.username.maxLength,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: userConstraints.email.minLength,
      maxLength: userConstraints.email.maxLength,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://api.dicebear.com/7.x/icons/svg?icon=droplet&backgroundColor=90caf9',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
