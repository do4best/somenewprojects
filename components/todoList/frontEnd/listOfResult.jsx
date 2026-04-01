import React, {useEffect} from 'react';

function ListOfResult(props) {
    const [result, setResult] = React.useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/")
        .then(res=>res.json())
        .then(data=>{
            setResult(data)
            console.log(data)
        }).catch(err=>console.log(err))
    })
    const handelDelete = (event) => {
        const id = event.target.id;
        if (confirm("Are you sure you want to delete this item?")) {
            console.log(id)
        }
    }
    return (
        <>
        <h1>List of Result</h1></>
    );
}

export default ListOfResult;