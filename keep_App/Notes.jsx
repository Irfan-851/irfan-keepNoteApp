
import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Show from "./Show";



const Notes=(props)=>{
  //const [expose, setExpose]=useState(false);

  const [note, setNote]=useState({
    title:"",
    description:"",
  });

  const input =(event)=>  {
    const{name, value} = event.target;
    setNote((prevalue)=>{
      return{
            ...prevalue,
            [name]:value,        
      };
    });   

  };

  const addevent=()=>  {
    props.passNote(note)
    setNote({
      title:"",
      description:"",
    });
  }
  // const exposeit=()=>{
  //   setExpose(true);


  // };


  return(
    <>
    <div className="main-div">
    <form>
    
      <input type="text" 
      name="title" 
      value={note.title} 
      onChange={input}
       placeholder="Title" />
      <br/> 

      <textarea row="" 
      column=""
       name="description"
        value={note.description} 
        onChange={input} 
        placeholder="Enter your Notes">
        {/* //onClick={exposeit}           */}
        </textarea>

      <Button onClick={addevent}>
      <AddIcon className="plus " />
      </Button>

      </form>
      </div>
    </>
  );
};

export default Notes;