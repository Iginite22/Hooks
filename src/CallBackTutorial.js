import React, { useCallback, useState } from 'react'
import Child from './Child';

export default function CallBackTutorial() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Abhay Thakur");

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={() => { setToggle(!toggle) }}>
                Toggle
            </button>
            {toggle && <h1>Toggle is clicked</h1>}
        </div>
    )
}
