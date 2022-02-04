import React, { useState } from "react";
import "./AddNote.css";

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 250;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    } else {
      alert("Your Entered Character Value limit is over");
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("You are Not entered any notes..Please enter notes...");
    }
  };
  return (
    <div className="note-new">
      <textarea
        rows="8"
        cols="20"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small className="small">
          {characterLimit - noteText.length} Remaining
        </small>
        <button onClick={handleSaveClick} className="button">
          SAVE
        </button>
      </div>
    </div>
  );
};
