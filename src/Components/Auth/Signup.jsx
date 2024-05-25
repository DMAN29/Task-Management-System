import { Password } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Signup = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Register</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="role"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
            <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
          </Select>
        </FormControl>
        <Button
          fullWidth
          className="custom-btn"
          type="submit"
          sx={{ padding: "0.9rem" }}
        >
          Register
        </Button>
      </form>
      <div className="flex items-center gap-2 py-5 justify-center">
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>Sign-in</Button>
      </div>
    </div>
  );
};

export default Signup;
