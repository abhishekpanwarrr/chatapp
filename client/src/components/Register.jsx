import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="block w-full rounded-md p-2 mb-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="block w-full rounded-md p-2 mb-2 border"
        />
        <button className="w-full block text-white bg-blue-500 rounded-md p-2">
          {" "}
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
