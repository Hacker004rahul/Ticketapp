import React,{useState,useEffect} from "react" 
import axios from "axios"
//import './TicketList.css'

function TicketList(){
    const[tickets,setTickets]=useState([])

    const fetchTickets=async()=>{
        try{
            const res= await axios.get('http://localhost:5000/api/tickets');
            setTickets(res.data)
        }catch(error){
            alert("Error fetching Data")
        }
    }
    useEffect(()=>{
    fetchTickets();
        },[])
    return(
        <div>
            <h2>Tickets</h2>
            {tickets.length===0 && <p>No Ticket Found</p>}
            {tickets.map((ticket)=>(
                <div key={ticket._id}>
                    <h3>{ticket.title}</h3>
                    <p>Description:{ticket.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TicketList