import React, {useEffect} from "react";
import {redirect, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {
    Button,
    FormControl,
    TextField,
} from "@mui/material";

function FormData() {
    const navigate = useNavigate();
    const [result, setResult] = React.useState([]);
    const [redirectTo, setRedirectTo] = React.useState(false);

    const [dataToInsert, setDataToInsert] = React.useState({
        ProductName: "",
        SupplierId: "",
        CategoryId: "",
        Unit: "",
        Price: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataToInsert((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted data:", dataToInsert);

        // Example redirect if needed
        // navigate("/next-page");
    };
    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(data=>{
            setResult(data)
            console.log(data)
            const foundData = data.find(item => window.location.pathname === `/modify/${item.ProductID}`);
            if (foundData) {
                setDataToInsert((preState) => ({
                    ...preState,
                    ...foundData,
                }))
            }else{
                if (!redirect) {
                    setRedirectTo(true);
                    navigate("/");
                }
            }
        }).catch(err=>console.log(err))
    },[])

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
            <FormControl
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                    maxWidth: 500,
                }}
            >
                <TextField
                    label="Product Name"
                    name="ProductName"
                    value={formData.ProductName}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Supplier ID"
                    name="SupplierId"
                    value={formData.SupplierId}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Category ID"
                    name="CategoryId"
                    value={formData.CategoryId}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Unit"
                    name="Unit"
                    value={formData.Unit}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Price"
                    name="Price"
                    type="number"
                    value={formData.Price}
                    onChange={handleChange}
                    fullWidth
                />

                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </FormControl>
        </Box>
    );
}

export default FormData;