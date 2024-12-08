
# Question Related To React
## Why Do We Need React?
React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications (SPAs). It is widely used because it solves several challenges in modern web development.For dynamic websites, these libraries make it easier to do DOM monipulation. Here's why React is important:

---
### 1. **Component-Based Architecture**
React enables developers to build reusable UI components. This modular approach improves code organization and allows for reusability, making applications easier to develop and maintain.

---

### 2. **Efficient DOM Manipulation with Virtual DOM**
React uses a Virtual DOM, which is a lightweight in-memory representation of the real DOM. When changes are made, React updates only the affected parts of the real DOM instead of re-rendering the entire page. This makes updates faster and improves performance.

---

### 3. **Declarative UI**
React simplifies the process of describing how the UI should look for any given state. Instead of manually updating the UI, developers define the UI structure in a declarative way, and React takes care of updating the DOM to match.

---

### 4. **Unidirectional Data Flow**
React's unidirectional data flow makes it easier to understand and debug applications. Data flows in one direction, from parent to child components, ensuring a predictable state management process.

---

### 5. **Rich Ecosystem and Tools**
React's ecosystem includes tools like:
   - **React Router** for navigation.
   - **Redux or Context API** for state management.
   - **React Developer Tools** for debugging.
These tools make React suitable for building complex applications.

---

### 6. **Cross-Platform Development**
React serves as the foundation for React Native, which allows developers to create mobile applications using the same concepts and components. This enables the reuse of code across web and mobile platforms.

---

### 7. **Large Community and Support**
React has a vast community of developers and extensive documentation. This ensures that you can find libraries, tools, and answers to your questions easily.

---

### 8. **Flexibility**
React doesn't enforce specific patterns or architectures, giving developers flexibility to use it with other libraries or frameworks for routing, state management, or backend communication.

---

### 9. **SEO-Friendly**
React supports server-side rendering (SSR), which helps in improving SEO for single-page applications by enabling search engines to index the page content.

---

### 10. **Adoption by Leading Companies**
React is used by companies like Facebook, Instagram, Netflix, and Airbnb, demonstrating its robustness and scalability.

---


React is ideal for building dynamic, interactive, and high-performing web applications. Its focus on simplicity, performance, and a strong ecosystem makes it a go-to choice for developers.

![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1733204606/files%20for%20readmi%20file/cb4de5ed-c537-47e5-af76-462773a2e4c2.png)

## Summary:
1. React is just an easier way to write normal HTML/CSS/JS.it is a new syntax , that under the hood gets converted to HTML/CSS/JS.

2. people realised its harder to do DOM manipulation that conventional way. 
there were libaries that came into the picture that made it slightly easy , but still for a very big app it's very hard (JQuery).
Eventully ,Vuejs/reaact create a new syntax to do frontends. Under the hood , the react compiler convert convert the code to HTML/CSS/Js.



## Some React Jargons (State Components and Re-rendering)
To create a react app, you usually need to worry about two things.
creators of frontend framework realised that all websites can effectively be divided into two parts.
1. State:
2. Components:

## State: 
An Object that represents the current state of the app.it represents the dynamic things in our app (things that can change). for example:the value of the counter

## Components: 
How a DOM element should render , given a state 
it is reusable,dynamic,HTML snippet that changes given the state.

![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/v1733207130/files%20for%20readmi%20file/d9e13843-b11f-4d5e-b6e2-f4317539adba.png)

You usually have to define all the Components once and then all you have to do is update the state of your app.React takes care of re-rendering your app.

### What is JSX?
JSX stands for javascript XML   . it is syntax extension for js. most commonly used with react, a popular libaray for building user interfaces .JSX allows you to write HTML -like code directly within js.this makes it easier to create and manage the user interface in react applications

## What is HOOks? 
Hooks in React are functions that let you use React features like state and lifecycle methods without writing a class. Introduced in React 16.8, they simplify the process of building functional components by allowing them to have state and side effects, which were previously possible only in class components.

  Rules of Hooks


  Only call Hooks at the top level (not inside loops, conditions, or nested functions).

  Only call Hooks from React function components or custom Hooks.


### useState

method 1:
```javascript
// JavaScript example
function App() {
  const [tasks,setTasks]=useState([{
    title:"",desc:""
  }]);
  const [task,setTask]=useState({title:"",desc:""});
  const addTaskHandle=(e)=>{
    e.preventDefault();
    setTasks([...tasks,task]);
    setTask({title:"",desc:""})
  }


  return (
    <>
      <h1>Task Todo</h1>
      <form onSubmit={addTaskHandle}>
        <div>
          Enter Task:<input type="text" name="task" value={task.title} id="task" onChange={(e)=>setTask({...task,title:e.target.value})} />
        </div>
        <div>
          Enter Discription:<input type="text" name="desc" value={task.desc} id="desc" onChange={(e)=>setTask({...task,desc:e.target.value})} />
        </div>
        <button type="submit">Add Task</button>
        {
          JSON.stringify(tasks)
        }
      </form>
    </>
  )
}

method 2:
function App() {
  const [tasks,setTasks]=useState([{
    title:"",desc:""
  }]);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const addTaskHandle=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{title,desc}])
    setDesc("")
    setTitle("")
  }


  return (
    <>
      <h1>Task Todo</h1>
      <form onSubmit={addTaskHandle}>
        <div>
          Enter Task:<input type="text" name="task" id="task" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
          Enter Discription:<input type="text" name="desc" id="desc" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        </div>
        <button type="submit">Add Task</button>
        {
          JSON.stringify(tasks)
        }
      </form>
    </>
  )
}

// method 1: to pass props
import React from 'react'

const ListTasks = (props) => {
  console.log(props.tasks)
  return (
    <div>

    <h1>ListTasks</h1>
    {
      props.tasks.map((task,key)=>{
        return <div key={key}>
          <h2>{task.title}</h2> <span>{task.desc}</span>
        </div>
      })
    }
    </div>
  )
}

// method 2: to pass props
const ListTasks = ({tasks}) => {
  console.log(tasks)
  return (
    <div>

    <h1>ListTasks</h1>
    {
      tasks.map((task,key)=>{
        return <div key={key}>
          <h2>{task.title}</h2> <span>{task.desc}</span>
        </div>
      })
    }
    </div>
  )
};

```
### Mounting,Re-rendering,Unmounting

1. Mounting: Mounting is the process of creating a new component and inserting it into the DOM.
  ```javascript
  useEffect(() => {
  console.log("Component mounted");
}, []); // Empty array ensures it runs only once.
```
ex .
```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <div>Hello, React!</div>;
}

export default App;
```
2. Re-rendering:Re-rendering occurs when a component updates, typically triggered by:
  - change in state
  - changes in props
  - a parent component re-rendering
  ```javascript
  useEffect(() => {
  console.log("Component updated");
}, [dependency]); // Re-run effect when dependency changes
```
ex. 
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
3. Unmounting:Unmounting is the process of removing a component from the DOM.
```javascript
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []); // Cleanup on unmount
```
example:
```javascript
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Component
      </button>
      {show && <Child />}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log("Child mounted");
    return () => {
      console.log("Child unmounted");
    };
  }, []);

  return <div>I am a child component!</div>;
}

export default App;
```

### useEffect: 
Before we understand useEffect , let’s understand what are Side effects.
#### SideEffect:
Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:
- **Fetching data** from an API.
- **Modifying the DOM** manually.
- **Subscribing to events** (like WebSocket connections, timers, or browser events).
- **Starting a clock**
These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.
### Problem in running side effects in React components

If you try to introduce side effects directly in the rendering logic of a component (in the return statement or before it), React would run that code every time the component renders. This can lead to:

- **Unnecessary or duplicated effects** (like multiple API calls).
- **Inconsistent behavior** (side effects might happen before rendering finishes).
- **Performance issues** (side effects could block rendering or cause excessive re-rendering).

## How useEffect Manages Side Effects:
The useEffect hook lets you perform side effects in functional components in a safe, predictable way:
```javascript
useEffect(() => {
  // Code here is the "effect" — this is where side effects happen
  fetchData();

  // Optionally, return a cleanup function that runs when the component unmounts.
  return () => {
    // Cleanup code, e.g., unsubscribing from an event or clearing timers.
  };
}, [/* dependencies */]);
```
- **The first argument** to `useEffect` is the effect function, where you put the code that performs the side effect.
- **The second argument** is the dependencies array, which controls when the effect runs. This array tells React to re-run the effect only when certain values (props or state) change. If you pass an empty array `[]`, the effect will only run **once** after the initial render.
- **Optional Cleanup**: If your side effect needs cleanup (e.g., unsubscribing from a WebSocket, clearing intervals), `useEffect` allows you to return a function that React will call when the component unmounts or before re-running the effect.

### To Recap:
useEffect is a Hook that lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.

![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/v1733654379/files%20for%20readmi%20file/Screenshot_2024-10-09_at_11.48.14_PM_wmtalj.png)

### Linkedin like topbar:
```javascript
import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });

  }, [])
  
  return <div>
    <button onClick={function() {
      setCurrentTab(1)
    }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
    <button onClick={function() {
      setCurrentTab(2)
    }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
    <button onClick={function() {
      setCurrentTab(3)
    }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
    <button onClick={function() {
      setCurrentTab(4)
    }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
<br /> 
    {loading ? "Loading..." : tabData.title}
  </div>
}

export default App
```
![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/v1733654519/files%20for%20readmi%20file/Screenshot_2024-10-10_at_1.20.42_AM_py2o0n.png)

### fetching data
```javascript
import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts.

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;



Conditional Rendering:based on condition,render a component.
```javascript
{counterVisible?<counter/>}

or

{counterVisible && <counter/>}

```




