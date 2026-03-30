import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../header.jsx";
import Box from "@mui/material/Box";
import FormData from "../formData.jsx";
import {Button} from "@mui/material";

function RouteData(props) {
    const navigator = useNavigate();

    return (
        <>
    <Header/>
    <Box sx={{display:'flex',direction:'column',gap:2,justifyContent:'center',alignItems:'center'}}>
        <FormData/>
        <Button onClick={()=>navigator("/")}>Go Back</Button>
    </Box>


        </>
    );
}

export default RouteData;