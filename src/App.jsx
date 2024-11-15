import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  
const [principle,setPrinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
const [interest,setInterest]=useState(0)
// for conditional rendering
const [isprinciple, setisprinciple]=useState(true)
const [israte, setisrate]=useState(true)
const [isyear, setisyear]=useState(true)
const calculate=()=>{
  setInterest((principle*rate*year)/100)
}
const validate = (e)=>{
  if(!!e.target.value.match(/^[0-9]*$/)){
  if(e.target.name == 'principle'){
    setPrinciple(e.target.value)
    setisprinciple(true)
  }
  else if(e.target.name == 'rate'){
    setRate(e.target.value)
    setisrate(true)
  }
  else{
    setYear(e.target.value)
    setisyear(true)
  }
}
else{
  if(e.target.name == 'principle'){
    // setPrinciple(e.target.value)
    setisprinciple(false)
  }
  else if(e.target.name == 'rate'){
    // setRate(e.target.value)
    setisrate(false)
  }
  else{
    // setYear(e.target.value)
    setisyear(false)
  }
}
}
const handlereset =()=>{
setPrinciple(0)
setRate(0)
setYear(0)
setisprinciple(true)
setisrate(true)
setisyear(true)
setInterest(0)
}
console.log(principle,rate,year)
  return (
    <>
      <div className='row'>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className='bg-warning rounded p-3 ' style={{height:'100vh'}}>
            <h3 className='text-center'>Simple Interest APP</h3>
            <div className='mt-3'>
              <p className='text-center'>Calculate your simple interest easily.</p>
            </div>
            <div className='mt-3 ronded bg-dark flex-column d-flex align-items-center justify-content-center text-light'>
              <h2>💲 {interest}</h2>
              <p>Total Simple Interest</p>
            </div>
            <form className='mt-5'>
              <div>
              <TextField id="outlined-basic" label="💲 Principal Amount" variant="outlined" className='w-100 bg-light'  name='principle' onChange={(e)=>validate(e)} value={principle || ''}/>
              {!isprinciple && <p className='text-danger'>Invalid Input</p>}
              </div>
              <div className='mt-4'>
              <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100 bg-light'  name='rate' onChange={(e)=>validate(e)} value={rate || ''}/>
              {!israte && <p className='text-danger'>Invalid Input</p>}
              </div>
              <div className='mt-4'>
              <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100 bg-light'  name='year' onChange={(e)=>validate(e)} value={year || ''}/>
              {!isyear && <p className='text-danger'>Invalid Input</p>}
              </div>
            </form>
            <div className='d-flex align-items-center justify-content-between mt-4'>
            <Button variant="contained" className='w-50' color='success' disabled={isprinciple && israte && isyear?false:true} onClick={calculate}>Calculate</Button>
            <Button variant="contained" className='ms-3 w-50' onClick={handlereset}>Reset</Button>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  )
}

export default App
