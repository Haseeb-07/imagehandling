import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            {user.image && <img src={`http://localhost:5000/${user.image}`} alt={user.name} style={{ width: 100, height: 'auto' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
