import React from "react";

const Input = (props)=>{
const inputChangeHandler = (input, value)=>{
 console.log(input);
 console.log(value);
}

    return(<p>
        <label htmlFor="current-savings">{props.label}</label>
        <input type="number" onChange={(event)=>inputChangeHandler(event.target.id, event.target.value)} id={props.label.toLowerCase().split(" ").join("-")} />
    </p>);

}

export default Input;