import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "./components/services/api-client";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof AxiosError && err.name === "CanceledError") return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete(`/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "iabur" }
    setUsers([newUser, ...users]);

    apiClient.post("/users", newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  const handleUpdate = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => u.id === user.id ? updatedUser : u));
    apiClient.patch(`/users/${user.id}`, updatedUser)
      .catch((error: AxiosError) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  }

  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <button className="btn btn-primary m-3" onClick={addUser}>Add User</button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button className="btn btn-outline-secondary mx-1" onClick={() => handleUpdate(user)}>Update</button>
              <button className="btn btn-outline-danger" onClick={() => handleDelete(user)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
