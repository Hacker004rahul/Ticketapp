import { useState } from "react";
import axios from 'axios';
//import './TicketForm.css';

function TicketForm(){

    const[form,setForm]=useState({
        title:'',
        description:''
    })

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/tickets',form);
            alert("Ticket Created");
            setForm({title:'',description:''});
        }catch(error){
            alert("Error fetching Ticket");
        }
    }

    return(<>
        <h1>Ticket Form</h1>
        <form>
        Title:<input type="text" name="title"/>
        Description:<input type="text" name="description"/>
        <button type="submit">Create Ticket</button>
        </form>
        </>
    )
}
export default TicketForm;