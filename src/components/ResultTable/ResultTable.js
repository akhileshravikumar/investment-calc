import React from 'react';
import './ResultTable.css'


const formatter = new Intl.NumberFormat('en-US',{
style: 'currency',
currency:'INR',
minimumFractionDigits:2,
maximumFractionDigits:2,
});

const ResultTable = (props)=>{


  

    if((props.data.length)===0){

      return(
        <table className='result'>
          <thead><tr>
            <th>Nothing here.. Add data and Click on Calculate. </th>
          </tr></thead>
        </table>)
      
    }

    return(
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(yearData=>{
            return(
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear-props.initialAmount- yearData.yearlyContribution * yearData.year)}</td>
            <td>{formatter.format(props.initialAmount + (yearData.yearlyContribution * yearData.year))}</td>
          </tr>
            );
          })}
          
        </tbody>
      </table>);
    }
    

export default ResultTable;