import React from 'react'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

function CreateGroups() {
    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{ease:"anticipate", duration:"0.3"}} 
            className='createGroups-container'>
                <input placeholder='Enter Group Name' className='search-box' />
                <IconButton>
                    <DoneOutlineRoundedIcon />
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default CreateGroups