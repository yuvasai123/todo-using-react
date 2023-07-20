import React from 'react'
import "./Styles/App.css"

const Add = ({arr,deleteHandler}) => {
   
  return (
    <>
    {
        arr.map((key,index)=>
        <center>
        <h1>{key} <button onClick={()=>deleteHandler(index)} style={{backgroundColor:'yellow'}}>delete</button></h1>
        </center>
        )
    }
    </>
  )
}

export default Add