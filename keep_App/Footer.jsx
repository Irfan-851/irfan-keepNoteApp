import React from "react";


const Footer =()=>{
    let year = new Date().getFullYear()
    return(
    <>
        
        <footer  className="footer">
            <p > 
            Copyright &copy; {year}
            </p>
        </footer>
     
        
    </>
    );
};
export default  Footer;