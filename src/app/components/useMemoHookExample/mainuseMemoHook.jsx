'use client'
import React, {memo} from 'react';
import {Box, Button, Typography} from "@mui/material";

const ExtansiveHook=memo(()=>{
    const sum=()=>{
        console.log("sum")
        let i=0;
        for(i = 0; i < 1000000000; i++) {
            i = i +1;
        }
        return i;
    }
    let total=sum();
    return <Typography variant="h2" sx={{textAlign:"center"}}> Total Sum : {total}</Typography>

})


function MainuseMemoHook(props) {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"}}>
<ExtansiveHook counter={count}/>
            <Button variant={"contained"} onClick={() => setCount( count + 1)}>Click Me</Button>
<Typography variant="h1">{count}</Typography>
            </Box>
        </>
    );
}

export default MainuseMemoHook;