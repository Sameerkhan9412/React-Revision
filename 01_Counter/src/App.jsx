import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

function App() {
  const [count,setCount]=useState(0);

  const onClickHandler=()=>{
    setCount(count+1);
  }

  return (
    <div>

      <button onClick={onClickHandler}>
          Count is {count}
      </button>
    </div>
  )
}

export default App
