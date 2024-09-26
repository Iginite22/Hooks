import React, { useEffect, useLayoutEffect, useRef } from 'react'

export default function LayoutEffectTutorial() {
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.value = "Hello Abhay Thakur"
    }, []);
    useLayoutEffect(() => {
        console.log(console.log(divRef.current.value));
    }, []);
    return (
        <div>
            <input ref={divRef} value="Hello User" style={{ width: 400, height: 200 }} />
        </div>
    )
}
