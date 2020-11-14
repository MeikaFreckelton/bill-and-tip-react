import React, {useState} from 'react'


const App = () => {

  const [percentageVal, setPercentageVal] = useState(0)
  const [billVal, setBillVal] = useState(0)
  const [result, setResult] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const tip = (percentageVal/100) * billVal
    const total = tip + parseInt(billVal)
    setResult(total)
  }

  const handleInputChange = (e) => {
    if (e.target.name ==="percentageValue"){
      setPercentageVal(e.target.value)
    } else if (e.target.name ==="billValue"){
      setBillVal(e.target.value)
    }
  }



  return(
    <div>
      <h1>bill and tip</h1>
      <h3>Total: {result}</h3>

      <form onSubmit={handleSubmit}>
          <label>Bill Amount: </label><br/>
          $<input 
          type="number" 
          name="billValue"
          onChange={handleInputChange}
          ></input><br/><br/>

          <label>Tip percentage:</label><br/>
          <input 
          type="number"
          name="percentageValue"
          onChange={handleInputChange}
          ></input>%<br/><br/>

          <input type="submit"></input>
        </form>
    </div>
  )
}




export default App;
