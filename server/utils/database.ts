import mysql from "mysql2/promise";
import { Pool } from "mysql2/promise";

const pool: Pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "290802",
    database: "quizz",
});

export default pool;
