import { useState } from "react";

interface TodoType {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (task: string) => {
    const newTodo: TodoType = {
      id: todos.length,
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <div>
        <ul>
          {todos.map((todo) => (
            <li>
              {todo.task}{" "}
              {todo.completed ? "(Task completed)" : "(Task have to do)"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
