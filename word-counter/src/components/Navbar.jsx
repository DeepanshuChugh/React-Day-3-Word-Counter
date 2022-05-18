import React from "react";
const Logo = ()=>{
    return(
        <div className="logo">
        <h1>Word Lab</h1>
        </div>
       
    )
}
const Menu = ({l1,l2,l3})=>{
    return(
        <div className="menuList">
            <ul>
            <li>{l1}</li>
            <li>{l2}</li>
            <li>{l3}</li>
        </ul>
       </div>
    )
}
const Button = ()=>{
    return(
        <div >
        <button className="btn">contact</button>
        </div>
       
    )
}
export {Logo,Menu,Button};
