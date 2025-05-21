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
    <div className=" w-[60%] p-10 text-white">
      <h1 className="mb-10 text-5xl font-thin text-white">Set <span className="text-red-400">Reminders</span> for <br /> tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
        className="p-2 border-b w-full text-2xl font-thin outline-0"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input type="checkbox" /> Completed
        <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded">Create Todo</button>
      </form>
    </div>
  );
}

export default Create;
