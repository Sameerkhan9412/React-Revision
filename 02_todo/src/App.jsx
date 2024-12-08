import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/todo';

function App() {
  const [todos,setTodos]=useState([{
    title:"Goto gym",
    description:"Hit the gym regularly",
    done:false
  }]);
  const addTodo=()=>{
    let newArray=[];
    for(let i=0;i<todos.length;i++){
      newArray.push(todos[i]);
    }
    newArray.push({
      title:document.getElementById("name").value,
      description:document.getElementById("desc").value,
      done:true
    })
    setTodos(newArray);
  }

  return (
    <>
     <div>
      <input type="text" name="name" id="name" />
      <input type="text" name="desc" id="desc" />
      <button onClick={addTodo} type='submit' >Add Todo</button>
      {/* {JSON.stringify(todos)}  */}
      {
        todos.map((todo)=>{
          return <Todo todo={todo}/>
        })
      }
     </div>
    </>
  )
}

export default App
