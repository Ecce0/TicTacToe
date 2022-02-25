import React, { useState } from 'react'
import Restart from './Restart'

const CheckForWinner = (squares) => {
    const [winner, setWinner] = useState(false)
    let combos = {
        across: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ],
        down: [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ],
        diagonal: [
            [6, 4, 2],
            [0, 4, 8]
        ]
    }

    for (let combo in combos) {
        combos[combo].forEach((pattern) => {
            if (
                squares[pattern[0]] === '' ||
                squares[pattern[1]] === '' ||
                squares[pattern[2]] === ''

            ) {
                ///nothing
            } else if (
                squares[pattern[0]] === squares[pattern[1]] &&
                squares[pattern[1]] === squares[pattern[2]]

            ) {
                setWinner(squares[pattern[0]])
            }
        })
    }



    return (
        <div> {winner ? 'true'(
            <div>
                <p>{winner} is the Winner</p>
                <Restart />
            </div>
        ) : 'false'}

        </div>
    )
}

export default CheckForWinner
