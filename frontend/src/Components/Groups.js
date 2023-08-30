import React from 'react'
import "./styles.css";
import logo from "../Images/chatterbox-notext.png"
import { IconButton } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useSelector } from 'react-redux';

function Groups() {

    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className='list-container'>
            <div className={'ug-header' + (lightTheme ? "" : " dark")}>
                <img src={logo} alt='Logo' style={{ height: "2rem", width: "2rem", marginLeft: "10px" }} />
                <p className='ug-title'>Available Groups</p>
            </div>
            <div className={'sidebar-search' + (lightTheme ? "" : " dark")}>
                <IconButton>
                    <PersonSearchIcon className={'icon' + (lightTheme ? "" : " dark")} />
                </IconButton>
                <input placeholder='Search' className={'search-box' + (lightTheme ? "" : " dark")} />
            </div>
            <div className='ug-list'>
                <div className={'list-item' + (lightTheme ? "" : " dark")}>
                    <p className='conversation-icon'>T</p>
                    <p className='conversation-title'>Test Groups</p>
                </div>
                <div className={'list-item' + (lightTheme ? "" : " dark")}>
                    <p className='conversation-icon'>T</p>
                    <p className='conversation-title'>Test Groups</p>
                </div>
                <div className={'list-item' + (lightTheme ? "" : " dark")}>
                    <p className='conversation-icon'>T</p>
                    <p className='conversation-title'>Test Groups</p>
                </div>
                <div className={'list-item' + (lightTheme ? "" : " dark")}>
                    <p className='conversation-icon'>T</p>
                    <p className='conversation-title'>Test Groups</p>
                </div>
            </div>
        </div >
    )
}

export default Groups