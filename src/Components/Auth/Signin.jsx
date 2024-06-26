import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Store/AuthSlice";

const Signin = ({ togglePanel }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
        <Button
          fullWidth
          className="custom-btn"
          type="submit"
          sx={{ padding: "0.9rem" }}
        >
          Login
        </Button>
      </form>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span>Don't have an account?</span>
        <Button onClick={togglePanel}>Sign-up</Button>
      </div>
    </div>
  );
};

export default Signin;
