import express from 'express'
import { router } from './route/route.js'

const app = express()

app.use(router)
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server is running at ${PORT}`))