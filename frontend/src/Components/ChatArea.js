import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea() {
  var props = { name: "Test User 1", timeStamp: "today" };
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