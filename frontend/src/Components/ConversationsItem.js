import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function ConversationsItem({ props }) {

  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();

  return (
    <div className={'conversation-container' + (lightTheme ? "" : " dark")} onClick={() => { navigate('chat') }}>
      <p className={'conversation-icon' + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
      <p className={'conversation-title' + (lightTheme ? "" : " dark")}>{props.name}</p>
      <p className={'conversation-lastMessage' + (lightTheme ? "" : " dark")}>{props.lastMessage}</p>
      <p className={'conversation-timeStamp' + (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationsItem