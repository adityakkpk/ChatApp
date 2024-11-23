import { model, Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  }
});

export const User = model('User', userSchema);
