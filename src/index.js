import express from "express"
import newMessageRouter from "../api/routes/newMessage.js"
import messageRouter from "../api/routes/getMessage.js"
import cors from 'cors'
const app = express()

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', messageRouter)
app.post('/new', newMessageRouter)

app.listen(PORT, () => console.log('listening on port ' + PORT))
