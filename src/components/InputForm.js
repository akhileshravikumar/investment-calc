import React from "react";
import Input from "./Input";
import './InputForm.css'



const InputForm = (props)=>{

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("SUBMIT")


    };
    const resetHandler = ()=>{

        console.log("RESET")

    };

    return(
    <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
            <Input label="Current Savings"/>
            <Input label="Yearly Savings"/>
        </div>
        <div className="input-group">
            <Input label="Expected Interest"/>
            <Input label="Investment Duration"/>
        </div>
        <p className="actions">
            <button type="reset" onClick={resetHandler} className="buttonAlt">
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
        </p>
  </form>);
}

export default InputForm;