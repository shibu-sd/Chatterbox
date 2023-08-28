import React from 'react'
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ConversationItem from './ConversationItem';

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-header'>
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>

          <div>
            <IconButton>
              <PersonAddIcon />
            </IconButton>
            <IconButton>
              <GroupAddIcon />
            </IconButton>
            <IconButton>
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
          <ConversationItem />
        </div>
    </div>
  )
}

export default Sidebar