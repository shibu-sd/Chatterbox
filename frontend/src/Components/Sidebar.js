import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

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

  return (
    <div className='sidebar-container'>
        <div className='sidebar-header'>
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>

          <div>
            <IconButton onClick={() => {navigate('users')}}>
              <PersonAddIcon />
            </IconButton>
            <IconButton onClick={() => {navigate('groups')}}>
              <GroupAddIcon />
            </IconButton>
            <IconButton onClick={() => {navigate('create-groups')}}>
              <AddCircleIcon />
            </IconButton>
            <IconButton>
              <NightlightIcon />
            </IconButton>
          </div>
        </div>

        <div className='sidebar-search'>
          <IconButton>
            <PersonSearchIcon />
          </IconButton>
          <input placeholder='Search' className='search-box'/>
        </div>
        <div className='sidebar-conversations'>
          {conversations.map((conversation) => {
            return <ConversationsItem props={conversation} key={conversation.name} />
          })}
        </div>
    </div>
  )
}

export default Sidebar