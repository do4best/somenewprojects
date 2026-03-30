import React from 'react';
import Box from "@mui/material/Box";

function MenuItems(props) {
    const [hover, setHover] = React.useState(false);
    const onLeveMouse=()=>{
        setHover(false)
    }
    const onLeveMouseEnter=()=>{
        setHover(true)
    }
    return (
        <>
        <Box onMouseEnter={onLeveMouseEnter} onMouseLeave={onLeveMouse} sx={{display:'flex',direction:'column',gap:2,justifyContent:'center',alignItems:'center',bgcolor:hover?"red":"white",width:"200px",height:"50px",border:"1px solid black"}}
        onClick={()=>{props.onClick(props.setDifficulty)}}>
            {props.setDifficulty}
        </Box>

        </>
    );
}

export default MenuItems;