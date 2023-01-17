//Importing the function createPool from mysql2 promises
import { createPool } from "mysql2/promise";

//Exporting the pool or connection from js to mysql
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Password2307",
  port: 3306,
  database: "usersdb" // you should create a database before adding it (In mySQL simple as, CREATE DATABASE usersdb;)
})