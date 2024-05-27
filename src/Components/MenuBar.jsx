import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import CreateTaskCard from "./Task/SubTasks/CreateTaskCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/AuthSlice";

const MenuBar = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = [
    {
      name: "Home",
      value: "HOME",
      role: ["ROLE_ADMIN", "ROLE_CUSTOMER"],
    },
    {
      name: "Done",
      value: "DONE",
      role: ["ROLE_ADMIN", "ROLE_CUSTOMER"],
    },
    {
      name: "Assigned",
      value: "ASSIGNED",
      role: ["ROLE_ADMIN"],
    },
    {
      name: "Not Assigned",
      value: "PENDING",
      role: ["ROLE_ADMIN"],
    },
    {
      name: "Create New Task",
      value: "NEW-TASK",
      role: ["ROLE_ADMIN"],
    },
    {
      name: "Notification",
      value: "NOTIFICATION",
      role: ["ROLE_CUSTOMER"],
    },
  ];

  const [activeMenu, setActiveMenu] = useState("Home");
  const [openCreateTaskCard, setOpenCreateTaskCard] = useState(false);
  const handleOpenCreateTaskModel = () => {
    setOpenCreateTaskCard(true);
  };
  const handleCloseCreateTaskModel = () => {
    setOpenCreateTaskCard(false);
  };
  const handleMenuChange = (item) => {
    const updatedParams = new URLSearchParams(location.search);
    setActiveMenu(item.name);
    if (item.name === "Create New Task") {
      handleOpenCreateTaskModel();
    }
    if (item.name == "Home" || item.name === "Create New Task") {
      updatedParams.delete("filter");
      const queryString = updatedParams.toString();
      const updatedPath = queryString
        ? `${location.pathname}?${queryString}`
        : location.pathname;
      navigate(updatedPath);
    } else {
      updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="h-[85vh] w-1/3 mx-8 sticky top-24 bg-gray-900 shadow-purple-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Avatar
          src="https://i.pinimg.com/736x/d6/a6/92/d6a692fc1e0489955e2b4ed4ae742c76.jpg"
          sx={{
            width: 150,
            height: 150,
            margin: "auto",
            marginTop: 5,
            border: "2px solid #B952E0",
          }}
        />

        <div className="space-y-8 mb-8 mt-14 flex-col flex uppercase">
          {menu
            .filter((item) => item.role.includes(role))
            .map((item, index) => (
              <div
                key={index}
                className={`text-center text-base lg:text-lg py-2 border border-[#B952E0]  mx-5 rounded-full ${
                  activeMenu === item.name ? "custom-btn" : "bg-none"
                } cursor-pointer`}
                onClick={() => handleMenuChange(item)}
              >
                {item.name}
              </div>
            ))}
        </div>
        <div
          className="text-white text-base lg:text-lg py-2 border mx-5 text-center rounded-full bg-gradient-to-r from-amber-500 to-pink-500 cursor-pointer"
          onClick={handleLogout}
        >
          LOGOUT
        </div>
      </div>
      <CreateTaskCard
        open={openCreateTaskCard}
        handleClose={handleCloseCreateTaskModel}
      />
    </>
  );
};

export default MenuBar;
