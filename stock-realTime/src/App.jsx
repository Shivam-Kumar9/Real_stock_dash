import { useEffect, useState } from 'react'
 
import './App.css'

function App() {
  let [currTheme, setCurrTheme] = useState(false)
  let [realdata , setRealData]  = useState('no data')
  let [search, setsearch] = useState('')
 async function fetchData(){
   try {
    let   res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${AS6ROL3QJEB14ZFV}`)
    let   data = await res.json()
     console.log(data)
     setRealData(data)
   } catch (error) {
     console.log(error.error)
   }
 
 
  // AS6ROL3QJEB14ZFV
 } 
  
 setTimeout(() => {
    console.log(realdata)
 }, 2000)
 
  useEffect(()=>{
    fetchData()
  },[])
  
  

 const handleTheme = ()=>{
     if(currTheme){
      setCurrTheme(false)
     } else{
      setCurrTheme(true)
     }
 }

  return (
    <div  className={currTheme?'dark':'light'}>
      <div className='Search_toggle'>
        <input type="text" name=""  placeholder='search stock' onChange={(e)=>{setsearch(e.target.value);console.log(search)}} value={search} /> 
        <button onClick={handleTheme}>{currTheme?'dark':'light'}</button>
       </div> 
      <div className='display'>
       
      </div>
    </div>
  )
}

export default App
