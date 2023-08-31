import React, { useState } from 'react'
import './styles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users from './Users';
import { Outlet } from 'react-router-dom';
import Groups from './Groups';
import { useDispatch, useSelector } from "react-redux";

function MainContainer() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);
  return (
    <div className={'main-container' + (lightTheme ? "" : " dark")}>
      <Sidebar />
      <Outlet />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users /> */}
      {/* <Groups /> */}
    </div>
  )
}

export default MainContainer