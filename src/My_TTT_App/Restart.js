import React, {useState } from 'react'

const Restart = () => {
    const [ cells, setCells ] = useState(Array.from(Array(10).keys()))
    const [ winner, setWinner ] = useState(null)

    const handleRestart = () => {
        setWinner(null)
        setCells(Array.from(Array(10).keys()))
    }

    return (
        <div>
            <button onClick={() => handleRestart()}>Play Again</button>
        </div>
    )
}

export default Restart
