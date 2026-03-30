import React from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Header(props) {
    return (
        <>
            <Box sx={{display:''}}>
        <Typography variant="h4" component="h1" gutterBottom>
            CRUD (React, NodeJS, Sqlite3)
        </Typography>
            </Box>
        </>
    );
}

export default Header;