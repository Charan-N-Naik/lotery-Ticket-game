import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketNum from './TicketNum'
import Lottery from './Lottery'
import Tickett  from './Ticket'
import { sum } from './helper'
function App() {

  let WinningCandition=(Ticket)=>{
    return Ticket.every((num)=>num==Ticket[0]);
  }

  return (
    <>
      {/* <TicketNum num={324}></TicketNum> */}
      <Lottery n={3} wincand={WinningCandition}  ></Lottery>
      {/* <Tickett Ticket={[1,3,4]}></Tickett> */}
    </>
  )
}

export default App
