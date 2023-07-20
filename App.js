import  React,{useState}from 'react'
import Nav from './Nav.js';
import "./Styles/App.css";
import Delete from "./Delete.js"
import Add from "./Add.js"
function App () {
  const [task,setTask]=useState("");
    const [arr,setArr]=useState([]);
  const submitHandler =(e)=>{
  e.preventDefault();
  setArr([...arr,task]); 
  setTask("");
   console.log(arr);
  }
  const deleteHandler=(indexValue)=>{
   const newTodos=arr.filter((key,index)=>index!==indexValue);
   setArr(newTodos);

  }
  return (
    <>
     <Nav/>
     <form onSubmit={submitHandler}>
     <input className="box" type="text" name="task" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
     <div className="buttons">
     <button className="buttons">submit</button>
     
     </div>
  </form>
  <Add arr={arr} deleteHandler={deleteHandler}/>
    </>
  )
}
export default App;
