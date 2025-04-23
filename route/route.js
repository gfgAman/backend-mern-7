import express from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/userDataController.js'

export const router = express.Router()

router.post('/post',createUser)
router.get('/get',getUser)
router.put('/put',updateUser)
router.delete('/delete',deleteUser)