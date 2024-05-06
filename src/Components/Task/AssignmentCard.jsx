import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import UserList from "./SubTasks/UserList";
import SubmissionList from "./SubTasks/SubmissionList";
import EditTaskCard from "./SubTasks/EditTaskCard";
const AssignmentCard = () => {
  const lang = ["HTML", "CSS", "JavaScript", "React Js", "Java", "SpringBoot"];
  const role = "ROLE_ADMIN";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handelMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const [openUpdateTaskCard, setOpenUpdateTaskCard] = useState(false);
  const handleOpenUpdateTaskModel = () => {
    setOpenUpdateTaskCard(true);
    handleMenuClose();
  };
  const handleCloseUpdateTaskModel = () => {
    setOpenUpdateTaskCard(false);
  };

  const handleDeleteTaskModel = () => {
    handleMenuClose();
  };
  return (
    <div className="bg-gray-900 shadow-purple-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full py-5 px-5 flex justify-between">
      <img
        src="https://www.livemint.com/lm-img/img/2023/12/19/1600x900/luxury_watches_for_men_1702968689078_1702968694832.jpg"
        alt=""
        className="h-36 w-36 object-cover object-center rounded-md my-auto "
      />
      <div className="mx-5 my-auto ">
        <h3 className="text-xl font-bold pb-2"> Watch Listing Website </h3>
        <p className="text-gray-400">
          {" "}
          isquam quia, quaerat dignissimos maxime doloribus suscipit, tempora
          sint doloremque sapiente autem consequatur fuga. Saepe ut temporibus
          itaque.{" "}
        </p>
        <ul className="mt-2 uppercase flex flex-wrap space-x-5">
          {lang.map((item, index) => (
            <li className="border-[#B952E0] border py-1 px-5 rounded-full mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          sx={{ color: "white" }}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handelMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {role === "ROLE_ADMIN" ? (
            <>
              <MenuItem onClick={handleOpenUserList}>Assigned Users</MenuItem>
              <MenuItem onClick={handleOpenSubmissionList}>
                See Submissions
              </MenuItem>
              <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
              <MenuItem onClick={handleDeleteTaskModel}>Delete</MenuItem>
            </>
          ) : (
            <></>
          )}
        </Menu>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      />
      <EditTaskCard
        open={openUpdateTaskCard}
        handleClose={handleCloseUpdateTaskModel}
      />
    </div>
  );
};

export default AssignmentCard;
