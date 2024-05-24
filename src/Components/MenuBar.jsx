import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import CreateTaskCard from "./Task/SubTasks/CreateTaskCard";

const MenuBar = () => {
  const menu = [
    {
      name: "Home",
      role: ["ROLE-ADMIN", "ROLE-USER"],
    },
    {
      name: "Done",
      role: ["ROLE-ADMIN", "ROLE-USER"],
    },
    {
      name: "Assigned",
      role: ["ROLE-ADMIN"],
    },
    {
      name: "Not Assigned",
      role: ["ROLE-ADMIN"],
    },
    {
      name: "Create New Task",
      role: ["ROLE-ADMIN"],
    },
    {
      name: "Notification",
      role: ["ROLE-USER"],
    },
  ];
  const role = "ROLE-ADMIN";
  const [activeMenu, setActiveMenu] = useState("Home");
  const [openCreateTaskCard, setOpenCreateTaskCard] = useState(false);
  const handleOpenCreateTaskModel = () => {
    setOpenCreateTaskCard(true);
  };
  const handleCloseCreateTaskModel = () => {
    setOpenCreateTaskCard(false);
  };
  const handleMenuChange = (item) => {
    setActiveMenu(item.name);
    if (item.name === "Create New Task") {
      handleOpenCreateTaskModel();
    }
  };
  return (
    <>
      <div className="h-[85vh] w-1/3 mx-8 sticky top-24 bg-gray-900 shadow-purple-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Avatar
          src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg"
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
                  activeMenu === item.name ? "btnGrad" : "bg-none"
                } cursor-pointer`}
                onClick={() => handleMenuChange(item)}
              >
                {item.name}
              </div>
            ))}
        </div>
        <div className="text-white text-base lg:text-lg py-2 border mx-5 text-center rounded-full bg-gradient-to-r from-amber-500 to-pink-500">
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
