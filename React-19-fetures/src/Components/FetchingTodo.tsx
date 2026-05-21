import { use } from "react";

const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json(),
);

const FetchingTodo = () => {
  const data = use(fetchData);
  return (
    <div>
      <h1>FetchingTodo</h1>
      <h2>Title: {data.title}</h2>
    </div>
  );
};

export default FetchingTodo;
