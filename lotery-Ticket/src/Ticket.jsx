import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Tickett({Ticket}){
   return( 
        <div className="ticket">
            {Ticket.map((num,idx)=>(
                <TicketNum key={idx} num={num}></TicketNum>
            ))}    
        </div>
   );

}