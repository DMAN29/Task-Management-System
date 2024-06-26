import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  console.log(auth);
  return (
    <div className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-lg lg:text-2xl px-5 py-3 font-semibold text-base sticky top-0 z-10">
      <div className="my-auto">
        <h1> Task Management</h1>
      </div>
      <div className="flex space-x-3 md:space-x-10 my-auto">
        <p className="my-auto">{auth.user?.fullName}</p>
        <Avatar sx={{ background: "#6366f1" }}>
          {auth.user?.fullName.charAt(0)}
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
