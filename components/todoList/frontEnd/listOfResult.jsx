import React, {useEffect} from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

function ListOfResult(props) {
    const [result, setResult] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(data => {
                setResult(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

    const handelDelete = (event) => {

        if (confirm("Are you sure you want to delete this item?")) {
            console.log("Information Detail");
            fetch("http://localhost:3000/", {
                method: "PUT",
                body: JSON.stringify({
                    ["ProductId"]: event.target.name,
                }),
                headers: {"Content-Type": "application/json"}
            });
            window.location.reload();
        } else {
            console.log("Deletion Cancelled");
        }
    };

    return (
        <Box sx={{width: '100%', maxWidth: 1000}}>
            <Typography variant="h6" sx={{mb: 2}}>
                Results
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Product ID</strong></TableCell>
                            <TableCell><strong>Product Name</strong></TableCell>
                            <TableCell><strong>Price</strong></TableCell>
                            <TableCell><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.map((item, index) => (
                            <TableRow key={item.ProductId || index}>
                                <TableCell>{item.ProductId}</TableCell>
                                <TableCell>{item.ProductName}</TableCell>
                                <TableCell>{item.Price}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        id={item.ProductId}
                                        name={item.ProductId}
                                        onClick={handelDelete}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ListOfResult;