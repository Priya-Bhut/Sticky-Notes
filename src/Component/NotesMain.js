import React, { useState, useEffect } from "react";
import { MdNotificationAdd } from "react-icons/md";
import { NotesFile } from "../Component/NotesFile";
import { nanoid } from "nanoid";
import { Search } from "./Search";
import { Header } from "./Header";

export const NotesMain = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    const newNote = {
      id: nanoid(),
      text: text,
      date:
        date.toLocaleDateString() +
        " - " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " " +
        ampm,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesFile
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
