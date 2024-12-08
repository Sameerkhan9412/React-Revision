import React from 'react'
const ListTasks = ({tasks,setTasks}) => {
  const removeTask=(key)=>{
    const newTask=tasks.filter((task)=>{
      if(task._id!==key) return task;
    })
    setTasks(newTask)
  }
  return (
    <div>
      <h1 className='text-4xl'>ListTasks</h1>
      <table className='w-full bg-gray-950' border={1} cellPadding={10} cellSpacing={0}>
       <thead className='bg-gray-400 '>
        <tr><th className='border-2'>S.no</th><th>Task</th><th>Description</th></tr>
       </thead>
      {
        tasks.map((task)=>{
          return <tr>
            <td>{task.title}</td> <td>{task.desc}</td><td><button onClick={()=>removeTask(task._id)}>X</button></td>
          </tr>
        })
      }

      </table>
    </div>
  )
}

export default ListTasks