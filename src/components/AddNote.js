import { useState } from "react";
import React, { useContext } from "react";
import NoteContext from "../context/Notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;


  const[note,setNote]= useState({title:" ",description:" ",tag:""})
  const handleAddClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  };

  const onChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value})

  }

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group my-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
              onChange={onChange}
              minLength={5} required
              
              
            />
           
            
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder=" Enter Description"
              onChange={onChange}
              minLength={5} required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control "
              id="tag"
              name="tag"
              placeholder=" Enter Tag"
              onChange={onChange}
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleAddClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
