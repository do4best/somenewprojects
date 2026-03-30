import React from 'react';
import Box from "@mui/material/Box";

function Footer(props) {
    return (
        <>
            <Box sx={{display:'flex',flexDirection:'column',gap:2,justifyContent:'center',alignItems:'center'}}>
                {new Date().getFullYear()}
            </Box>
        </>
    );
}

export default Footer;