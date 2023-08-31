import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import CreateGroups from "./Components/CreateGroups";
import Groups from "./Components/Groups";
import { useSelector } from "react-redux";

function App() {

  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={"App" + (lightTheme ? "" : "dark")}>
      {/* <MainContainer /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />} >
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="users" element={<Users />} />
          <Route path="create-groups" element={<CreateGroups />} />
          <Route path="groups" element={<Groups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
