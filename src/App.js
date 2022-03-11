import logo from './logo.svg';
import React from 'react'
import './App.css';


function App() {
  const [value, setValue] = React.useState(0)
  const [shownValue, setShownValue] = React.useState(0)
  const [operation, setOperation] = React.useState('')
  const [numberType, setNumberType] = React.useState('')
  const [decimalCount, setDecimalCount] = React.useState(1)

  function enterClear() {
    setValue(0)
    setShownValue(0)
    setNumberType('')
  }

  function enterNumber(number){
    if (numberType != '.'){
      setShownValue(function(oldShownValue){
        return oldShownValue * 10 + number
      })
    }
    else {
    setShownValue(function(oldShownValue){
      return oldShownValue + number / (decimalCount * 10)
    })
    setDecimalCount(function(oldDecimalCount){
      return oldDecimalCount * 10
    })
  }
}

  function enterSign() {
    setShownValue(function(oldShownValue){
      return oldShownValue * -1
    })
  }

  function enterOperator(operator) {
    setValue(shownValue)
    setShownValue(0)
    setOperation(operator)
    setDecimalCount(1)
    setNumberType('')
  }

  function enterDecimal() {
    setNumberType('.')
  }

  function enterEquals() {
    if (operation === 's') {
      setShownValue(value - shownValue)
    }
    else if (operation === 'd') {
      setShownValue(value / shownValue)
    }
    else if (operation === 'm'){
      setShownValue(value * shownValue)
    }
    else if (operation === 'p') {
      setShownValue(value + shownValue)
    }
    setValue(0)
    setDecimalCount(0)
    setNumberType('')
  }

  return (
    <div className="App">
      <header className = "display">{shownValue}</header>
      <div className = "number-buttons" >
        <button className = "operation" id = "clear" onClick = {() => enterClear()}> AC</button>
        <button className = "operation" id = "negative" onClick = {() => enterSign()}> +/- </button>
        <button className = "operation" id = "percent"> % </button>
        <button className = "operation" id = "squared"> ^2 </button>
        <button className = "number" id = "one" onClick = {() => enterNumber(1)}>1</button>
        <button className = "number" id = "two" onClick = {() => enterNumber(2)}>2</button>
        <button className = "number" id = "three" onClick = {() => enterNumber(3)}>3</button>
        <button className = "number" id = "plus" onClick = {() => enterOperator('p')}>+</button>
        <button className = "number" id = "four" onClick = {() => enterNumber(4)}>4</button>
        <button className = "number" id = "five" onClick = {() => enterNumber(5)}>5</button>
        <button className = "number" id = "six" onClick = {() => enterNumber(6)}>6</button>
        <button className = "number" id = "minus" onClick = {() => enterOperator('s')}>-</button>
        <button className = "number" id = "seven" onClick = {() => enterNumber(7)}>7</button>
        <button className = "number" id = "eight" onClick = {() => enterNumber(8)}>8</button>
        <button className = "number" id = "nine" onClick = {() => enterNumber(9)}>9</button>
        <button className = "operation" id = "multiply" onClick = {() => enterOperator('m')}>x</button>
        <button className = "operation" id  ="decimal" onClick = {() => enterDecimal()}>.</button>
        <button className = "number" id = "zero" onClick = {() => enterNumber(0)}>0</button>
        <button className = "operation" id = "equal" onClick = {() => enterEquals()} >=</button>
        <button className = "operation" id = "divide" onClick = {() => enterOperator('d')}>/</button>
      </div>
    </div>
  );
}

export default App;
