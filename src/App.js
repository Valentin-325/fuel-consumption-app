import React, {useState} from 'react';
import './App.css';

function App() {

  const [fuel, setFuel] = useState('')
  const [km, setKm] = useState('')
  const [calc, setCalc] = useState('')
  const [msg, setMsg] = useState('')


  const calcConsumption = (e) => {
    e.preventDefault()

    if(fuel === 0 && km === 0) {
      alert('Completeaza cele 2 campuri!!')
    } else {
      let calc = (fuel * 100 / km)
      setCalc(calc.toFixed(1))
    }

    setFuel('')
    setKm('')
    setMsg('l/100km') 

  }

  return (
    <div className="App">

      <div className="container">
          <div className="titleForm">
            <h1>Fuel Consumption</h1>
          </div>

          <form onSubmit={calcConsumption}>
            <div className="inputFuel">
              <label htmlFor="fuelAdded">Fuel added:</label> <br />
              <input type="text" placeholder='0' name="combustibil" id="combustibil" value={fuel} onChange={(e) => setFuel(e.target.value)}/>
            </div>
            <div className="inputKm">
              <label htmlFor="kilometersTraveled">kilometers traveled:</label> <br />
              <input type="text" placeholder='0' name="kilometri" id="km" value={km} onChange={(e) => setKm(e.target.value)}/>
            </div>
            <button className='btn' type='submit'>Calculate</button>
          </form>
        
        <div className="displayConsumption">
          <p>Your Consumption is: {calc} {msg}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
