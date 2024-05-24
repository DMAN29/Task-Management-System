import * as React from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

export default function UserList({ handleClose, open }) {
  const task = [1, 1, 1, 1];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {task.map((item, index) => (
            <div key={index}>
              <div className="flex m-2">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src="https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    secondary="@code_hype"
                    primary={"Code Hype"}
                  ></ListItemText>
                </ListItem>
                <Button
                  sx={{
                    backgroundImage: "linear-gradient(150deg,#c24dd0,#7a72fa)",
                    color: "white",
                    marginY: "auto",
                    paddingX: 3,
                  }}
                >
                  Select
                </Button>
              </div>
              {index === task.length - 1 ? <></> : <Divider />}
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
