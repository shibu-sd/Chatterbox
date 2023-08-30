import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea({props}) {

  const [conversations, setConversations] =  useState([
    {
      name : "Test User 1",
      lastMessage : "Last Message 1",
      timeStamp : "today",
    },
    {
      name : "Test User 2",
      lastMessage : "Last Message 2",
      timeStamp : "today",
    },
    {
      name : "Test User 3",
      lastMessage : "Last Message 3",
      timeStamp : "today",
    },
  ]);

  var props = conversations[0];

  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='conversation-icon'>{props.name[0]}</p>
        <div className='header-text'>
          <p className='conversation-title'>{props.name}</p>
          <p className='conversation-timeStamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className='messages-container'>
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageSelf />
        <MessageOthers />  
        <MessageOthers />
      </div>
      <div className='text-input-area'>
        <input placeholder='Type a Message' className='search-box' />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea