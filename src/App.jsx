import React from "react";
import Navbar from "./Components/Navbar";
import MenuBar from "./Components/MenuBar";
import Assignment from "./Components/Task/AssignmentCard";
function App() {
  return (
    <>
      <Navbar />
      <div className="lg:w-5/6 mx-auto flex my-8">
        <MenuBar />
        <div className="w-full  space-y-8">
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <Assignment key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
