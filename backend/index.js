import express from "express"
import { PORT } from "./config.js"
import { mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import { bookRouter } from "./routes/booksRoute.js"
import cors from 'cors'

const app = express()

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS policy
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use('/books', bookRouter)

app.get('/', (request, response) => {
    return response.status(234).send('Welcome to MERN stack tutorial')
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the db')

        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })