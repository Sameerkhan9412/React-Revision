import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <h1>Task</h1>
      {
        todo.title
      }
    </div>
  )
}

export default Todo