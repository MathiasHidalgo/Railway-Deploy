import express from 'express'
import { pool } from './db.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    const result = pool.query(`SELECT "Hello world" as RESULT`);
    console.log(result)
    res.send('Hello World!')
})

app.listen(3000)
console.log('Server on port 3000')

