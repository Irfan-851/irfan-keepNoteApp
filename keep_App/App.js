import React, { useState }  from "react";
import Header from "../keep_App/Header";
import Footer from "../keep_App/Footer";
import Notes from "../keep_App/Notes";
import Show from "../keep_App/Show";


const App=()=>{
  const [item, setItem]=useState([]);

  const addNote=(note)=>
  {
    if(! item){

    }else{

    
    //alert("successful click");
    setItem((prevalue)=>{
      return [ ...prevalue,note] ; 
      
    });
  }
  };

  const onDelete=(id)=>{
    setItem((olddata)=>
      olddata.filter((value, indx)=>{
        return indx !== id;
      })
    );

  };
  return(
    <>
      <Header/>
      <Notes passNote={addNote}/>
      

      {item.map((value,index)=>{
        return(<Show
          key={index}
          id={index}
          title={value.title}
          description={value.description}
          deleteItem={onDelete}
        />);
      })}             
     
      <Footer/>
    </>
  )
};

export default App;