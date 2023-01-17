import express from 'express'
import { pool } from './db.js'

const app = express()

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
})

app.get('/ping', async (req, res) => {
    const [result] = await pool.query(`SELECT "Hello world" as RESULT`);
    res.json(result[0])
    res.send('')
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
    res.json(result)
})

app.listen(3000)
console.log('Server on port 3000')

