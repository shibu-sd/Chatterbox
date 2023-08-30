import React from 'react'
import "./styles.css";
import logo from "../Images/chatterbox-notext.png"
import { IconButton } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { AnimatePresence, motion } from "framer-motion";

function Users() {
    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{ease:"anticipate", duration:"0.3"}}
             className='list-container'>
                <div className='ug-header'>
                    <img src={logo} alt='Logo' style={{ height: "2rem", width: "2rem", marginLeft: "10px" }} />
                    <p className='ug-title'>Online Users</p>
                </div>
                <div className='sidebar-search'>
                    <IconButton>
                        <PersonSearchIcon />
                    </IconButton>
                    <input placeholder='Search' className='search-box' />
                </div>
                <div className='ug-list'>
                    <div className='list-item'>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test User</p>
                    </div>
                    <div className='list-item'>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test User</p>
                    </div>
                    <div className='list-item'>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test User</p>
                    </div>
                    <div className='list-item'>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test User</p>
                    </div>
                </div>
            </motion.div >
        </AnimatePresence>
    )
}

export default Users