import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import MenuBar from "./Components/MenuBar";
import TaskList from "./Components/TaskList";
import Auth from "./Components/Auth/Auth";
import { ThemeProvider } from "@mui/material";
import { DarkTheme } from "./theme/DarkTheme";
import { getUserProfile } from "./Store/AuthSlice";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserProfile(localStorage.getItem("jwt")) || auth.jwt);
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={DarkTheme}>
      {auth.user ? (
        <div>
          <Navbar />
          <div className="lg:w-5/6 mx-auto flex my-8">
            <MenuBar role={auth.user.role} />
            <TaskList />
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
