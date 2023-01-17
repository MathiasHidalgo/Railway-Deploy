//Just importing express js framework
import express from 'express'
// importing the promise of db.js 
import { pool } from './db.js'

//init of express in app to use his functions 
const app = express()

// GET function to show the users in a json in the home page
app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
})

// GET function in /ping to show just a json of hello world 
app.get('/ping', async (req, res) => {
    const [result] = await pool.query(`SELECT "Hello world" as RESULT`);
    res.json(result[0])
    res.send('')
})

// GET function in /create to INSERT in the table created in mysql users, but just the name who has as VALUES ("John")
app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
    res.json(result)
})

app.listen(3000) //Running the server on port 3000
console.log('Server on port 3000')

