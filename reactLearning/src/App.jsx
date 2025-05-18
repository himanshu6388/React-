import React, { useState } from "react";
import { nanoid } from "nanoid";
import Create from "./components/Create";
import Read from "./components/Read";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Kam  kar  lo", isCompleted: false },
  ]);

  return (
    <>
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
