import React, { useImperativeHandle } from 'react'
import { forwardRef, useState } from 'react';
const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }))

    return (
        <div>
            <button onClick={() => { setToggle(!toggle); }}>Button from Child</button>
            {toggle && <h1>Hello From Abhay Thakur</h1>}
        </div>
    )
});

export default Button;