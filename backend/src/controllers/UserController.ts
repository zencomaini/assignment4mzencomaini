import { NextFunction, Request, Response } from "express"
import bcrypt from 'bcrypt';
import { UserModel } from "../models";
import mongoose from "mongoose";
import { rest } from "lodash";

const validate = async (req: Request, res: Response, next: NextFunction) => {
  let Validation = true

  if(Validation) {
    res.json({
      message: 'Validation succsessful',
      username: req.body.username,
      password: req.body.password,
      
    })
    next()
  } else {
    res.json({
      message: 'Validation Failed'
    })
  }
}

const registerUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body

    bcrypt.hash(password, 10, (hashError, hash) => {
      if (hashError) {
        return res.status(401).json({
          message: hashError.message,
          error: hashError
        });
      }
      res.json({
        hash
      })

      const _user = new UserModel({
        _id: mongoose.Types.ObjectId,
        email,
        username,
        password: hash
      });

      console.log(_user)
      return _user
        .save()
        .then((user) => {
          return res.status(201).json({
            user
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error
          });
        });
    })
}

const loginUser = (req: Request, res: Response) => {
  let { username, password } = req.body
  let dbUsername = 'root'
  let dbPassword = 'terserah'

  let validate = username == dbUsername && password == dbPassword ? 'Login success' : 'Login Failed'

  res.json({
    message: 'Login user',
    username,
    password
  })
}

const getUser = (req: Request, res: Response) => {
  UserModel.find({})
  console.log('Getting user')
}

export { registerUser, loginUser, getUser, validate }