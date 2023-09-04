import React , {useState} from "react";
import Input from "./Input";
import './InputForm.css'

const initialUserInput = {
    'current-savings':null,
    'yearly-savings':null,
    'expected-interest' : null,
    'investment-duration':null,
};

const InputForm = (props)=>{

    
    const [userInput, setUserInput]=useState(initialUserInput);

    const inputChangeHandler = (input, value)=>{
        setUserInput((prevState)=>{
           return({
               ...prevState,
               [input]:+value,
           });
        });
       }

    const submitHandler = (event)=>{
        event.preventDefault();
        props.onSubmitHandler(userInput);


    };
    const resetHandler = ()=>{

        setUserInput(initialUserInput);
        props.onSubmitHandler(null);
    };

    return(
    <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
            <Input label="Current Savings" func={inputChangeHandler} val = {userInput["current-savings"]}/>
            <Input label="Yearly Savings" func={inputChangeHandler} val = {userInput["yearly-savings"]}/>
        </div>
        <div className="input-group">
            <Input label="Expected Interest" func={inputChangeHandler} val = {userInput["expected-interest"]}/>
            <Input label="Investment Duration" func={inputChangeHandler} val = {userInput["investment-duration"]}/>
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