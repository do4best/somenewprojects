import React from 'react';

function MoreCostumeHooks(props) {
    const [count,setCount]=React.useState(0);
    const addCount=()=>{
        setCount((count1)=>(count1+1));
    }
    const subCount=()=>{
        setCount((count1)=>(count1-1));
    }
    return {count, addCount, subCount}
}

export default MoreCostumeHooks;