import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const { data } = response;
      setNotes(data);
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

    axios
      .post("https://jsonplaceholder.typicode.com/posts", noteToAddToState)
      .then((response) => {
        const { data } = response;
        setNotes((prevNotes) => prevNotes.concat(data));
      });
    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Posts</h1>
      {loading ? "Cargando..." : ""}
      <li>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </li>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add name</button>
      </form>
    </div>
  );
}
