import React from "react";

function Read(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  let rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <>
      <h1>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </>
  );
}

export default Read;
