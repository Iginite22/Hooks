import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function EffectTutorial() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
                console.log("API was called")
            });
    }, [data]);
    return (
        <div>
            <h1>EffectTutorial   {data}</h1>
            <div>Count: {count}</div>
            <button onClick={() => { setCount(count + 1); }}>Increase Count</button>
        </div>
    )
}
