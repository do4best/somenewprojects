import React from 'react';
import {Box, Button, Typography} from "@mui/material";

import MainCustomeHook from "./mainCustomeHook";
function CostumeHookDemo(props) {
    let {count,startIncrementer,stopIncrementer}=MainCustomeHook();
    return (
        <>
        <Box  sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <Typography variant="h1">{count}</Typography>
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                <Button  variant={"contained"} color="success" onClick={startIncrementer}>Increment</Button>
                <Button  variant={"contained"} color="secondary" onClick={stopIncrementer}>Decrement</Button>
            </Box>

        </Box>

        </>
    );
}

export default CostumeHookDemo;