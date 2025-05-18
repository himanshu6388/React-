import React, { useState } from 'react'
import {nanoid} from 'nanoid'
function App() {


  const [todos, setTodos] = useState([
    
    {id:1,title:"Kam  kar  lo", isCompleted:false}
  ])

  const  [title, setTitle] =  useState();


  const SubmitHandler = (e) =>{
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title,
      isCompleted :false
    }
    // console.log(newtodo);
    
    let  copytodo= [...todos];
    copytodo.push(newtodo);
    setTodos(copytodo)

    // setTodos([...todos, newtodo]);

    setTitle("")
  }

     let  rendertodos = todos.map(todo =>{
      return <li key={todo.id}>{todo.title}</li>
    })
  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
        onChange={(e)=> setTitle(e.target.value)
        }
        value={title}
        type="text" placeholder='title' />
        <br />
        <input type="checkbox"  />  Completed
        <br />
        <button>Create Todo</button>
      </form>

      <hr />
       
       <h1>Pending Todos</h1>
       <ol>{rendertodos}</ol>
    </>
  )
}

export default App