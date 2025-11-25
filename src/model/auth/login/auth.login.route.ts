import express from 'express'
import { loginService } from './auth.login.service.js'

const router = express.Router()

router.post('/login',loginService)

export const loginRouter = router;