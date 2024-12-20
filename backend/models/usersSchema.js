import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: { type: String, required: [true, "Name is required!"] },
  email: { type: String, required: [true, "Email is required1"] },
  password: { type: String, required: [true, "Password is required"] },
  token: { type: String, default: null },
});

export default mongoose.model("User", usersSchema);
