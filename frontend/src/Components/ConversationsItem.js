import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConversationsItem({props}) {

  const navigate = useNavigate();

  return (
    <div className='conversation-container' onClick={() => {navigate('chat')}}>
        <p className='conversation-icon'>{props.name[0]}</p>
        <p className='conversation-title'>{props.name}</p>
        <p className='conversation-lastMessage'>{props.lastMessage}</p>
        <p className='conversation-timeStamp'>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationsItem