import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Connection to the database
const pool = mysql
  .createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT || 3306,
  })
  .promise()


// queries DB for all notes
export async function getAllNotes() {
  const query = "SELECT * FROM notes ORDER BY id DESC";

  const [rows] = await pool.query(query);
  return rows;
}


// INSERT a new note into DB
export async function addNote(title, content) {
    const query = "INSERT INTO notes (title, content) VALUES (?, ?)";

    await pool.query(query, [title, content]);

    return await getAllNotes();
}


// DELETE a note
export async function deleteNote(id) {
  const query = "DELETE FROM notes WHERE id = ?";

  await pool.query(query, [id]);

  return await getAllNotes();
}
