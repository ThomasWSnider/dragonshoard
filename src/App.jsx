import React from "react"
import { useState } from 'react'
import './App.css'

function ChangeCountBtn({ message, onButtonClick }) {

  return (
    <div className="col-6 d-flex justify-content-center pe-3">
      <div>
        <button onClick={onButtonClick} className="btn btn-dark">
          {message}
        </button>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const countParity = (count % 2 == 0) ? "even" : "odd";

  function handleClick(value) {
    setCount(() => count + value);
  }
  function handleToggle(toggle) {
    setToggle(() => !toggle)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h1>{count}</h1>
        </div>
        <div className="col-12 text-center mb-3">
          {toggle ? <h4>The count is <span className={countParity}>{countParity}</span></h4> : <h4 className="placeholder">the count is invisible</h4>}
        </div>
        <div className="col-12">
          <div className="row">
            <ChangeCountBtn message={"Decrement Count"} onButtonClick={() => handleClick(-1)} />
            <ChangeCountBtn message={"Increment Count"} onButtonClick={() => handleClick(1)} />
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-4">
              <div className="form-check form-switch d-flex justify-content-around">
                <input onClick={() => handleToggle(toggle)} title="Toggle Parity" className="form-check-input" type="checkbox" role="switch" id="parityIndicator" />
                <label className="form-check-label" htmlFor="parityIndicator">Toggle Parity</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
