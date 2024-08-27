import React from 'react'
import "./imcCal.css";
import Button from './Button';
import { useState } from 'react';
const ImcCal = ({calcImc}) => {
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
     
    const cleaForm = (e)=>{
      e.preventDefault();
      setHeight("");
      setWeight("");
    }

    const validDigits = (text) =>{
      return text.replace(/[^0-9,]/g,"")
    }

    const handleHeightChange = (e)=>{
      const updateValue = validDigits(e.target.value);
       setHeight(updateValue);
    }

    const handleWeightChange = (e)=>{
      const updateValue = validDigits(e.target.value);
       setWeight(updateValue);
    }


  return (
    <div className='cal-container'>
       <h2>Calculadora IMC</h2>
       <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input
                         type="text" 
                         name="height" 
                         id="height" 
                         placeholder='exemplo 1,75' 
                         value={height}
                         onChange={(e) => handleHeightChange(e)}
                         />
                </div>
                <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input
                         type="text" 
                         name="weight" 
                         id="weight" 
                         placeholder='exemplo 75,5' 
                         value={weight}
                         onChange={(e) => handleWeightChange(e)}
                         />
                </div>
            </div>

            <div className="action-control">
               <Button id="calc-btn" text="calcular" action={(e)=>calcImc(e,height,weight)}/>
               <Button id="clear-btn" text="limpar" action={cleaForm}/>
            </div>
       </form>


    </div>
  )
}

export default ImcCal