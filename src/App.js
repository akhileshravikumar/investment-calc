
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultTable from './components/ResultTable';

import React, {useState} from 'react';


function App() {

  const [userInput,setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results
  if(userInput){
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-savings'];
    const expectedReturn = +userInput['expected-interest'] / 100;
    const duration = +userInput['investment-duration'];

    // calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header/>
      <InputForm onSubmitHandler = {calculateHandler}/>
      {userInput && <ResultTable data={yearlyData} initialAmount = {userInput['current-savings']}/>} 
      {!userInput && <ResultTable data={[]}/>}
    </div>
  );
}

export default App;
