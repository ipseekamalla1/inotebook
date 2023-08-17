import React,{useContext} from "react";
import NoteContext from "../context/Notes/NoteContext";


const NoteItem = (props) => {
  const context=useContext(NoteContext);
  const { deleteNote }=context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("Updated Successully","Success");}}></i>
            <i className="far fa-edit mx-2" onClick={()=>{updateNote(note);props.showAlert("Delete Successully","Success");}}></i>
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;