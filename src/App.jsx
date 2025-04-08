import React from "react"
import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const countParity = (count % 2 == 0) ? "even" : "odd";
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h1>{count}</h1>
        </div>
        <div className="col-12 text-center mb-3">
          <h4>The count is <span className={count % 8 == 0 ? "divisible-by-three" : countParity}>{countParity}</span></h4>
        </div>
        <div className="col-6 d-flex justify-content-center pe-3">
          <button onClick={() => setCount((count) => count - 1)} className="btn btn-danger">
            Decrement Count
          </button>
        </div>
        <div className="col-6 d-flex justify-content-center ps-3">
          <button onClick={() => setCount((count) => count + 1)} className="btn btn-success">
            Increment Count
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
