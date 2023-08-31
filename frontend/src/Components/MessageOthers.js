import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function MessageOthers() {

    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);

    var props1 = { name: "Random User", message: "Sample Message" };
    return (
        <div className={'other-message-container' + (lightTheme ? "" : " dark")}>
            <div className={'conversation-container' + (lightTheme ? "" : " dark")}>
                <p className={'conversation-icon' + (lightTheme ? "" : " dark")}>{props1.name[0]}</p>
                <div className={'other-text-content' + (lightTheme ? "" : " dark")}>
                    <p className={'conversation-title' + (lightTheme ? "" : " dark")}>{props1.name}</p>
                    <p className={'conversation-lastMessage' + (lightTheme ? "" : " dark")}>{props1.message}</p>
                    <p className='self-timeStamp'>12:00 AM</p>
                </div>
            </div>
        </div>
    )
}

export default MessageOthers