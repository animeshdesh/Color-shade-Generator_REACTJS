import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index, hexColor}) => {
  const [alert,setAlert]= useState(false);

  const bcg = rgb.join(",")
  

  useEffect(()=> {
    const timeout = setTimeout(()=>{
      setAlert(false);
    },3000);
    return ()=> clearTimeout(timeout);
  },[alert]);

  return (  
    <>
    <article 
    className={'color'}
    style={{backgroundColor:`rgb(${bcg})`}}
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexColor);
    }}>
    <p>{weight}%</p>
    {alert && <p className='alert'>Copied To Clipboard</p>}
    </article>
    </>
  )
}

export default SingleColor
