import React from 'react';
import Box from "@mui/material/Box";
import DifficultyDisplay from "./DifficultyDisplay.jsx";
import MenuList from "./MenuList.jsx";

function MainDisplayit(props) {
    const [currentDifficulty, setCurrentDifficulty] = React.useState("Insane");
    const onMenuListItemClick = (name)=>{
        setCurrentDifficulty(name)
    }
    return (
        <>
        <Box sx={{display:'flex',direction:'row',gap:2,height:"100vh",width:"100vw",justifyContent:'center',alignItems:'start',mt:20}}>
            <DifficultyDisplay difficulty={currentDifficulty}/>
            <MenuList onItemClick={onMenuListItemClick} diffeculty={currentDifficulty}/>
        </Box>

        </>
    );
}

export default MainDisplayit;