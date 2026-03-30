import React from 'react';
import Box from "@mui/material/Box";

function DifficultyDisplay(props) {
    const [hover, setHover] = React.useState(false);
    const onLeveMouse=()=>{
        setHover(false)
    }
    const onLeveMouseEnter=()=>{
        setHover(true)
    }
    console.log(hover?"hovering":"not hovering")
    return (
        <>
        <Box onMouseEnter={onLeveMouseEnter} onMouseLeave={onLeveMouse} sx={{bgcolor:hover?"red":"white",width:"200px",height:"200px",border:"1px solid black",alignItems:'center',justifyContent:'center',display:'flex'  }}>
            {props.difficulty?`is Set to ${props.difficulty} `:`No Difficulty Set`}
        </Box>

        </>
    );
}

export default DifficultyDisplay;