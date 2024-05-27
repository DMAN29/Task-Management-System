import { OpenInNew } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { acceptDeclineSubmission } from "../../../Store/SubmissionSlice";
const SubmissionCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAcceptDecline = (status) => {
    console.log(status);
    console.log(item.id);
    dispatch(acceptDeclineSubmission({ id: item.id, status: status }));
  };

  return (
    <div className="flex p-5 bg-black justify-between text-white">
      <div className="">
        <div className=" space-x-2">
          <span>Git Hub :</span>
          <OpenInNew sx={{ color: "violet" }} />
          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ee82ee]"
          >
            Go To Link
          </a>
        </div>
        <div className="text-xs ">Submission Time: {item.submissionTime}</div>
      </div>
      {item.status === "PENDING" ? (
        <div className="space-x-5 my-auto">
          <IconButton onClick={() => handleAcceptDecline("ACCEPT")}>
            <CheckIcon color="success" />
          </IconButton>
          <IconButton onClick={() => handleAcceptDecline("DECLINED")}>
            <CloseIcon color="error" />
          </IconButton>
        </div>
      ) : (
        <Button
          color={item.status === "ACCEPT" ? "success" : "error"}
          variant="outlined"
        >
          {item.status}
        </Button>
      )}
    </div>
  );
};

export default SubmissionCard;
