//Importing the function createPool from mysql2 promises
import { createPool } from "mysql2/promise";

import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
} from './config.js';

//Exporting the pool or connection from js to mysql
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME // you should create a database before adding it (In mySQL simple as, CREATE DATABASE usersdb;)
})