import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signup", {
        email,
        password,
      });
      console.log("response", response);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
