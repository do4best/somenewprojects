import React, {useEffect} from "react";
import {data, redirect, useNavigate} from "react-router-dom";
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
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(res=>res.json())
            .then(data=>{
                setResult(data)
                console.log(data)
                const foundData = data.find(item => window.location.pathname === `/modify/${item.ProductId}`);
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

    const handleChange = (event) => {

        setDataToInsert((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {

      const foundItem = result.find((item)=>window.location.pathname ===`/modify/${item.ProductId}`);
      if (foundItem){
          fetch("http://localhost:3000/",{
              method:"PUT",
              body:JSON.stringify(dataToInsert),
              headers:{"Content-Type":"application/json"}
          });
          navigate("/")
      }else{
          fetch("http://localhost:3000/",{
              method:"POST",
              body:JSON.stringify(dataToInsert),
              headers:{"Content-Type":"application/json"}
          })
      }


    };



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
                    value={dataToInsert.ProductName}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Supplier ID"
                    name="SupplierId"
                    value={dataToInsert.SupplierId}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Category ID"
                    name="CategoryId"
                    value={dataToInsert.CategoryId}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Unit"
                    name="Unit"
                    value={dataToInsert.Unit}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Price"
                    name="Price"
                    type="number"
                    value={dataToInsert.Price}
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