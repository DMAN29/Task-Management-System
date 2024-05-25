import React from "react";
import Navbar from "./Components/Navbar";
import MenuBar from "./Components/MenuBar";
import Assignment from "./Components/Task/AssignmentCard";
import { ThemeProvider } from "@mui/material";
import { DarkTheme } from "./theme/DarkTheme";
import Auth from "./Components/Auth/Auth";
function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <>
        {/* <Navbar />
        <div className="lg:w-5/6 mx-auto flex my-8">
          <MenuBar />
          <div className="w-full  space-y-8">
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <Assignment key={index} />
            ))}
          </div>
        </div> */}
        <Auth />
      </>
    </ThemeProvider>
  );
}

export default App;
