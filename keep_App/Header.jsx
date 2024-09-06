import React from "react";
import  Image from "./image/keep-512.png";



const Header =()=>{
    return(
    <>
        <div className="header">
            <img src={Image}alt="logo" width="70px" height="50px"/>
            <h1>
                keep Note
            </h1>
        </div>
    </>
    );
};
export default  Header;