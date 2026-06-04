'use client'
import React from 'react';
import {Typography} from "@mui/material";
import Component2 from "./component2";
import {Context} from "./exportContext";

function Component1(props) {
    const [count, setCount] = React.useState(1);
    return (
        <>
            <Context.Provider value={{count}}>
        <Typography variant={'h1'} sx={{textAlign:"center"}} >Component {count}</Typography>
                <Component2 />
            </Context.Provider>


        </>
    );
}

export default Component1;