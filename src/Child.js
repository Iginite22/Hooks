import React, { useEffect } from 'react'

export default function Child({ returnComment }) {
    useEffect(() => {
        console.log("Function was Called");
    }, [returnComment]);
    return (
        <div>{returnComment("Pedro")}</div>
    )
}
