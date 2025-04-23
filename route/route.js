import express from 'express'
import { createUser } from '../controllers/userDataController.js'

export const router = express.Router()

router.post('/post',createUser)