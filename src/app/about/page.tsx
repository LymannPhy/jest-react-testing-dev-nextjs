import React, { useState, useEffect } from "react";

interface User {
  id: number;
  email: string;
  // Add any other properties of the user object here
}

const About: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json: User[]) => setUsers(json))
      .catch((error) => console.log(error));
  }, []);

  console.log(users);

  return (
    <div>
      <h1>This is about page!!</h1>
      {users.map((user) => (
        <p key={user.id}>{user.email}</p>
      ))}
    </div>
  );
};

export default About;
