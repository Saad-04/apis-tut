import express from "express";
import {login,userAll,userData,register} from '../controllers/userController.js'


export const router = express.Router()


router.get('/all', userAll)
router.get('/userData', userData)
router.post('/register', register)
router.post('/login', login)

