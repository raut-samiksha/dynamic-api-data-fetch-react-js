import { useEffect, useState } from "react";
import UserData from "./components/UserData";
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUser(API);
  }, []);
  return (
    <>
      <h1>
          Creating a dynamic table with data fetched 
          from an API using React JS
      </h1>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
