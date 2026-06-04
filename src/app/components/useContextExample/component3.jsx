'use client'
import React, {useContext} from 'react';
import {Typography} from "@mui/material";
import {Context} from "./exportContext";

function Component3() {
    const user =useContext(Context)
    return (
        <>

        <Typography variant={'h1'} sx={{textAlign:"center"}} >Component {user.count} </Typography>
        </>
    );
}

export default Component3;