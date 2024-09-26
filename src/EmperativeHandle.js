import React, { useRef } from 'react'
import Button from './Button'
export default function EmperativeHandle() {
    const ref = useRef(null);
    return (
        <div>
            <button onClick={() => { ref.current.alterToggle() }} >Button From Parent</button>
            <Button ref={ref} />
        </div>
    )
}

