import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <Button className="delete" variant="outlined" startIcon={<DeleteIcon />} onClick={handleClick}>
                Delete
            </Button>
        </div>
    )
}

export default Note;