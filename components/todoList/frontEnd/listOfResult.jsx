import React, {useEffect} from 'react';
import {
    Box,
    Button, Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

function ListOfResult() {
    const [result, setResult] = React.useState([]);
// side effect as outsider
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(data => {
                setResult(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);
// delete
    const handelDelete = async (event) => {
        console.log(event.target.name);

        if (confirm("Are you sure you want to delete this item?")) {
            console.log("Information Detail");
            await fetch("http://localhost:3000/", {
                method: "DELETE",
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
                            <TableCell><strong>Product Name</strong></TableCell>
                            <TableCell><strong>Product ID</strong></TableCell>
                            <TableCell><strong>Product Code</strong></TableCell>
                            <TableCell><strong>Product Type</strong></TableCell>
                            <TableCell><strong>Product Price</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.map((item, index) => (
                            <TableRow key={item.ProductId || index}>
                                <TableCell>{item.ProductName}</TableCell>
                                <TableCell>{item.SupplierId}</TableCell>
                                <TableCell>{item.CategoryId}</TableCell>
                                <TableCell>{item.Unit}</TableCell>
                                <TableCell>{item.Price}</TableCell>
                                <TableCell sx={{display: 'flex', gap: 2}}>
                                    <Link to={`/modify/${item.ProductId}`}>
                                        <Button variant="contained">
                                            Modify
                                        </Button>
                                    </Link>
                                    <Button variant="contained" color="error" name={item.ProductId} onClick={handelDelete} >
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