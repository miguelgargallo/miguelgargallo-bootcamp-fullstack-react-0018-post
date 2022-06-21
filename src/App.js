import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import axios from "axios";
import { getAllNotes } from "./servicios/notes/getAllNotes";
import { createNote } from "./servicios/notes/createNote";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("crear nota");
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    createNote(noteToAddToState).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(data));
    });

    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Posts</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add name</button>
      </form>
    </div>
  );
}
