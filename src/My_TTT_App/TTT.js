import React, { useState } from 'react'
import './TicTacToe.css'
import Cell from './Cell'

const TTT_Mine = ({ num }) => {
  

  return (
    <>
      <h2>My Version of Tic Tac Toe</h2>
      
        <div className="container_mine">             
        <table className='table'>
          <Cell
            num={num}
          />
        </table>

      </div>
    </>



  )
}

export default TTT_Mine
