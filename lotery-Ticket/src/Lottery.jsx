import { useState } from "react";

import { generateTicket,sum } from "./helper";
import Tickett from "./Ticket";
export default function Lottery({n=3,wincand}){

    let [Ticket,setTicket]=useState(generateTicket(n));
    let iswinnig=wincand(Ticket);

    function  buyTick() {
        setTicket(generateTicket(n))
    }

    return (
        <div className="container">
            <h1>Lottery game!!!</h1>
            <Tickett Ticket={Ticket}></Tickett>
            <button onClick={buyTick}>Buy A New Ticket</button>
            <h3 style={{color:"red",fontSize:"x-large"}}>{iswinnig&&"Congratulation,You won!!!!!!"}</h3>
        </div>
    );




}