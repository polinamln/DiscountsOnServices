import User from "../models/usersSchema.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const userRegister = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(200).json({
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (e) {
    next(e);
  }
};

export const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    await User.findByIdAndUpdate(user._id, { token });
    res
      .status(200)
      .json({ user: { name: user.name, email: user.email, token } });
  } catch (e) {
    next(e);
  }
};

export const userLogout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { token: null });
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).send({ user });
  } catch (e) {
    next(e);
  }
};
