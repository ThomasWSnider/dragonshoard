import React from "react"
import { useState } from 'react'
import './App.css'

function ChangeCountBtn({ message, onButtonClick }) {

  return (
    <div className="col-6 d-flex justify-content-center pe-3">
      <button onClick={onButtonClick} className="btn btn-dark">
        {message}
      </button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const countParity = (count % 2 == 0) ? "even" : "odd";

  function handleClick(value) {
    setCount(() => count + value);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h1>{count}</h1>
        </div>
        <div className="col-12 text-center mb-3">
          <h4>The count is <span className={countParity}>{countParity}</span></h4>
        </div>
        <ChangeCountBtn message={"Decrement Count"} onButtonClick={() => handleClick(-1)} />
        <ChangeCountBtn message={"Increment Count"} onButtonClick={() => handleClick(1)} />
      </div>
    </div>
  )
}

export default App
