'use client'
import React from 'react';
import {Typography} from "@mui/material";
import Component3 from "./component3";

function Component2() {
    return (
        <>

        <Typography variant='h1' sx={{textAlign:"center"}} >Component 2</Typography>
            <Component3/>
        </>
    );
}

export default Component2;