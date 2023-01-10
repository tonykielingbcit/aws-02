import express from "express";
import * as db from "./db/actions.js";

const app = express();
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async(req, res) => {
    console.log("gettin stuff on home");

    const notes = await db.getAllNotes();

    res.render("index", { notes });
});


app.post("/createNote", async (req, res) => {
    console.log("creating note: ", req.body);

    const { title, content } = req.body;
    const addNote = await db.addNote(title, content);
console.log("notes:: ", addNote);
    res.render("index", { notes: addNote });
});


app.post("/deleteNote", async(req, res) => {
    const { id } = req.body;
    const deleteNote = await db.deleteNote(id);

    return res.render("index", { notes: deleteNote });
});


app.listen(port, () => console.log(`Application is running on port ${port}`));
