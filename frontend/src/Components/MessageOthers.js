import React from 'react'

function MessageOthers() {
    var props1 = { name: "Random User", message: "Sample Message" };
    return (
        <div className='other-message-container'>
            <div className='conversation-container'>
                <p className='conversation-icon'>{props1.name[0]}</p>
                <div className='other-text-content'>
                    <p className='conversation-title'>{props1.name}</p>
                    <p className='conversation-lastMessage'>{props1.message}</p>
                    <p className='self-timeStamp'>12:00 AM</p>
                </div>
            </div>
        </div>
    )
}

export default MessageOthers