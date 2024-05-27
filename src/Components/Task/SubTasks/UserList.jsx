import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserList } from "../../../Store/AuthSlice";
import { assignedTaskToUser } from "../../../Store/TaskSlice";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
};

const contentStyle = {
  overflowY: "auto",
  maxHeight: "100%",
};

export default function UserList({ handleClose, open }) {
  const dispatch = useDispatch();
  const { auth, task } = useSelector((store) => store);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const taskId = param.get("taskId");
  useEffect(() => {
    dispatch(getUserList(localStorage.getItem("jwt")));
  }, [dispatch]);

  const assignTask = (item) => {
    dispatch(assignedTaskToUser({ taskId: taskId, userId: item.id }));
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={contentStyle}>
            {auth.users
              .filter((item) => item.role === "ROLE_CUSTOMER")
              .map((item) => (
                <div key={item.id}>
                  <div className="flex m-2">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src="https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        secondary={`@${item.fullName
                          .split(" ")
                          .join("_")
                          .toLowerCase()}`}
                        primary={item.fullName}
                      />
                    </ListItem>
                    <Button
                      sx={{
                        marginY: "auto",
                        paddingX: 3,
                      }}
                      className="custom-btn"
                      onClick={() => assignTask(item)}
                    >
                      Select
                    </Button>
                  </div>
                  <Divider />
                </div>
              ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
