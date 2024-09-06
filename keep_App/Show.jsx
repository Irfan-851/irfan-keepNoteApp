import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Show =(props)=>
{
    const deleteNote = ()=>{
        props.deleteItem(props.id)
    }
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <br/>
            <p> {props.description}</p>
            <button className="btn" onClick={deleteNote}>
                <DeleteOutlineIcon className="deleteBtn"/>
            </button>

        </div>

        </>
    );
}

export default Show;