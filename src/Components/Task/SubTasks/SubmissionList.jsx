import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SubmissionCard from "./SubmissionCard";

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
  p: 4,
};

const submission = [1, 1, 1];
export default function SubmissionList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="space-y-2">
            {submission.length === 0 ? (
              <div className="text-center">No Submission Found</div>
            ) : (
              <>
                {submission.map((item) => (
                  <SubmissionCard />
                ))}
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
