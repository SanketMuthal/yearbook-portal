import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFaceRelieved } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    const [style,setStyle]= useState("navbar1")

const changeClass= () => {
    if(style=="navbar1"){
    setStyle("navbar_change");
}else if(style=="navbar_change"){
    setStyle("navbar1");
}
}

return(
    <div className="navbar">
        <div className="logo">
            <a className="navItem" href="/">LOGO</a>
        </div>
        <div className={style}>
            <div className="navbarCollapse">
            <a className="navItem" href="/">Home</a>
            <a className="navItem" href="/">Lorem</a>
            <a className="navItem" href="/">Ipsum</a>
            </div>
        </div>
        <div onClick={changeClass} className="hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
            </svg>
        </div>
    </div>
    )
}