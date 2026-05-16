import { useEffect, useState } from "react";

type InfoType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
const UserList = () => {
  const [data, setData] = useState<InfoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Fetch Data Error : ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      {data ? (
        data.map((item) => (
          <ul key={item.id}>
            <li>I'D: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>UserName: {item.username}</li>
            <li>Email: {item.email}</li>
            <li>Phone: {item.phone}</li>
          </ul>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserList;
