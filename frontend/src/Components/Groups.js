import React from 'react'
import "./styles.css";
import logo from "../Images/chatterbox-notext.png"
import { IconButton } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion";

function Groups() {

    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{ease:"anticipate", duration:"0.3"}} 
            className='list-container'>
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
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test Groups</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test Groups</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test Groups</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test Groups</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={'list-item' + (lightTheme ? "" : " dark")}>
                        <p className='conversation-icon'>T</p>
                        <p className='conversation-title'>Test Groups</p>
                    </motion.div>
                </div>
            </motion.div >
        </AnimatePresence>
    )
}

export default Groups