import React from 'react';
import Box from "@mui/material/Box";
import MenuItems from "./MenuItems.jsx";

function MenuList(props) {
    const [hover, setHover] = React.useState(false);
    const onLeveMouse=()=>{
        setHover(false)
    }
    const onLeveMouseEnter=()=>{
        setHover(true)
    }
    return (
        <>
            <Box sx={{border:"1px solid black",width:"200px",height:"200px"}}>
                <MenuItems onClick={props.onItemClick} setDifficulty={"Hard"}/>
                <MenuItems onClick={props.onItemClick} setDifficulty={"Medium"}/>
                <MenuItems onClick={props.onItemClick} setDifficulty={"low"}/>
            </Box>
        </>
    );
}

export default MenuList;