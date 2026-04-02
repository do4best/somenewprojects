import React from 'react';
import {FormControl} from "@mui/material";
import FormData from "./formData.jsx";
import Box from "@mui/material/Box";
import Header from "./header.jsx";
import ListOfResult from "./listOfResult.jsx";
import Footer from "./footer.jsx";

function MainFrontPage() {
    return (
        <>

    <Box sx={{display:'flex',flexDirection:'column',gap:2,justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <Header/>

            <FormData/>
            <ListOfResult/>

        <Footer/>
    </Box>
        </>
    );
}

export default MainFrontPage;