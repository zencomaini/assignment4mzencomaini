import express from 'express'
import { getUser, loginUser, registerUser, validate } from '../controllers';

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', validate, loginUser)
router.get('/get', getUser)

export = router