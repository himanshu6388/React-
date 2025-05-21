import React from "react";
function Read(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;


  const DeleteHandler  = (id)=>{
   
    const filtertodo = todos.filter((todo)=>todo.id != id);
    setTodos(filtertodo);
  }

  let rendertodos = todos.map((todo) => {
    return <li
    key={todo.id} className="mb-2 flex justify-between items-center p-3 bg-gray-900 rounded">
      
   <span className="text-xl font-thin text-white"> {todo.title}</span> 
   <button
   className="text-small font-thin text-red-500"
   onClick={()=> DeleteHandler(todo.id)}>Delete</button>
    </li>


  });




  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl font-thin text-white"><span className="text-orange-400">Pending</span> Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
}

export default Read;
