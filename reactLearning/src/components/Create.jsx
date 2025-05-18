import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
function Create(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const [title, setTitle] = useState();

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    // console.log(newtodo);

    let copytodo = [...todos];
    copytodo.push(newtodo);
    setTodos(copytodo);

    // setTodos([...todos, newtodo]);

    setTitle("");
  };
  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input type="checkbox" /> Completed
        <br />
        <button>Create Todo</button>
      </form>
    </>
  );
}

export default Create;
