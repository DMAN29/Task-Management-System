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
  bgcolor: "#121113",
  color: "white",
  border: "2px solid #000",
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
            <>
              <div className="flex mt-5 mb-2 w-full">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src="https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg" />
                  </ListItemAvatar>
                  <div>
                    <h1>Code Hype</h1>
                    <p className="text-xs">@code_hype</p>
                  </div>
                </ListItem>
                <Button
                  sx={{
                    paddingX: 5,
                    backgroundImage: "linear-gradient(150deg,#c24dd0,#7a72fa)",
                    color: "white",
                  }}
                >
                  Select{" "}
                </Button>
              </div>
              {index === task.length - 1 ? <></> : <hr />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
