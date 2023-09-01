import React from "react";

const Input = (props)=>{

    return(<p>
        <label htmlFor={props.label.toLowerCase().split(" ").join("-")}>{props.label}</label>
        <input type="number" onChange={(event)=>props.func(event.target.id, event.target.value)} id={props.label.toLowerCase().split(" ").join("-")} 
        value={props.val}/>
    </p>);

}

export default Input;