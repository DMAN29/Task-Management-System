import { OpenInNew } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const SubmissionCard = () => {
  const handleAcceptDecline = (status) => {
    console.log(status);
  };
  return (
    <div className="flex p-5 bg-black justify-between text-white">
      <div className="">
        <div className=" space-x-2">
          <span>Git Hub :</span>
          <OpenInNew sx={{ color: "violet" }} />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ee82ee]"
          >
            Go To Link
          </a>
        </div>
        <div className="text-xs ">Submission Time: 2024-01-31T10:24:54</div>
      </div>
      {false ? (
        <Button color="success" variant="outlined">
          ACCEPTED
        </Button>
      ) : (
        <div className="space-x-5 my-auto">
          <IconButton onClick={() => handleAcceptDecline("ACCEPT")}>
            <CheckIcon color="success" />
          </IconButton>
          <IconButton onClick={() => handleAcceptDecline("DECLINED")}>
            <CloseIcon color="error" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default SubmissionCard;
