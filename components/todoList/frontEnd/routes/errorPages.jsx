import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
function ErrorPages(props) {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{}}>
<Typography variant="body2" color="textSecondary">
    This Page Does not Exist.
</Typography>
                <Button onClick={()=>navigate("/")}>Go</Button>
            </Box>

        </>
    );
}

export default ErrorPages;