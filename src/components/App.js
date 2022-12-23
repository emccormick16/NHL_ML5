import { Button } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
  return (
    <div>
      <h1>NHL Machine Learning</h1>
      <Button variant="contained">Hello World</Button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
