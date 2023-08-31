import React from 'react'
import "./styles.css";
import logo from "../Images/chatterbox-notext.png"
import { IconButton } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';

function Users() {

    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{ease:"anticipate", duration:"0.3"}}
             className='list-container'>
                <div className={'ug-header' + (lightTheme ? "" : " dark")}>
                    <img src={logo} alt='Logo' style={{ height: "2rem", width: "2rem", marginLeft: "10px" }} />
                    <p className={'ug-title' + (lightTheme ? "" : " dark")}>Online Users</p>
                </div>
                <div className={'sidebar-search' + (lightTheme ? "" : " dark")}>
                    <IconButton className={'icon' + (lightTheme ? "" : " dark")}>
                        <PersonSearchIcon />
                    </IconButton>
                    <input placeholder='Search' className={'search-box' + (lightTheme ? "" : " dark")} />
                </div>
                <div className='ug-list'>
                    <div className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className={'conversation-icon' + (lightTheme ? "" : " dark")}>T</p>
                        <p className={'conversation-title' + (lightTheme ? "" : " dark")}>Test User</p>
                    </div>
                    <div className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className={'conversation-icon' + (lightTheme ? "" : " dark")}>T</p>
                        <p className={'conversation-title' + (lightTheme ? "" : " dark")}>Test User</p>
                    </div>
                    <div className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className={'conversation-icon' + (lightTheme ? "" : " dark")}>T</p>
                        <p className={'conversation-title' + (lightTheme ? "" : " dark")}>Test User</p>
                    </div>
                    <div className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className={'conversation-icon' + (lightTheme ? "" : " dark")}>T</p>
                        <p className={'conversation-title' + (lightTheme ? "" : " dark")}>Test User</p>
                    </div>
                </div>
            </motion.div >
        </AnimatePresence>
    )
}

export default Users