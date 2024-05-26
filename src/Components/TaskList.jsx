import React, { useEffect } from "react";
import AssignmentCard from "./Task/AssignmentCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, fetchUsersTask } from "../Store/TaskSlice";
import { useLocation } from "react-router-dom";

const TaskList = () => {
  const dispatch = useDispatch();
  const { auth, task } = useSelector((store) => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("filter");

  useEffect(() => {
    if (auth.user?.role === "ROLE_ADMIN") {
      dispatch(fetchTasks({ status: filterValue }));
    } else {
      dispatch(fetchUsersTask({ status: filterValue }));
    }
  }, [filterValue]);

  return (
    <div className="w-full  space-y-8">
      {task.tasks.map((item) => (
        <AssignmentCard key={item.id} item={item} role={auth.user?.role} />
      ))}
    </div>
  );
};

export default TaskList;
