import express from 'express'
import cors from 'cors'
import router from './model/auth/register/auth.register.route.js'
import { loginRouter } from './model/auth/login/auth.login.route.js'
import { userRouter } from './model/user/user.route.js'

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/auth',router)
app.use('/api/auth',loginRouter)
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('school is open')
})

export default app;