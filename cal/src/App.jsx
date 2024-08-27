import './App.css'
import { useState } from 'react'
import {data} from './data/data.js'
import ImcCal from "./components/ImcCal.jsx"
import ImcTable from './components/ImcTable.jsx'
function App() {
 const [imc, setImc] = useState("")
 const [info, setInfo] = useState("")
 const [infoClass, setInfoClass] = useState("")
  
 const calcImc = (e,height,weight) => {
  e.preventDefault();
  
  if(!weight || !height) return;
  const weightFloat = +weight.replace(",",".")
  const heighttFloat = +height.replace(",",".")

  const imcResult = (weightFloat / (heighttFloat * heighttFloat)).toFixed(1)
  setImc(imcResult)
    data.forEach((item)=>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      } 
    });
    if(!info) return;
 }

 const resetCalc = (e) =>{
  e.preventDefault();
  setImc("");
  setInfo("");
  setInfoClass("");
 }

  return (
    <>
      <div className="container">
        {!imc ?(
               <ImcCal calcImc={calcImc}/>
        ):(
          <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
        )}
      </div>
    </>
  )
}

export default App
