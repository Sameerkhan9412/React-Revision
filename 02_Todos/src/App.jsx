import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTasks from './components/ListTasks';

function App() {
  const [tasks,setTasks]=useState([]);
  const [task,setTask]=useState({_id:"",title:"",desc:""});
  const addTaskHandle=(e)=>{
    e.preventDefault();
    if(task.title==""|| task.desc==""){
      alert("required All field");
      return;
    }
    setTasks([...tasks,task]);
   setTask({id:"",title:"",desc:""});
   console.log(tasks)
  }


  return (
    <>
    <div>
      <h1 className='text-3xl mb-3'>Task Todo</h1>
      <form onSubmit={addTaskHandle} className='flex justify-center items-center gap-4'>
        <div className='ml-2 '>
          <input type="text" name="task" id="task" value={task.title} placeholder='Enter Title' onChange={(e)=>setTask({...task,title:e.target.value,_id:Date.now()})} className='py-1 px-2 outline-none border-b-2 border-y-white rounded-lg ml-2 text-center' />
        </div>
        <div>
          <input type="text" name="desc" id="desc"  placeholder="enter description" value={task.desc} onChange={(e)=>setTask({...task,desc:e.target.value})} className='py-1 px-2 outline-none border-b-2 border-y-white text-center rounded-lg ml-2' />
        </div>
        <button type="submit" >Add Task</button>
      </form>
      <ListTasks tasks={tasks} setTasks={setTasks}/>
    </div>
    </>
  )
}

export default App
