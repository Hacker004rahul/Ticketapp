const mongoose=require('mongoose');

const ticketSchema= new mongoose.Schema({
title:{type:String,required:true},
description:{type:String}
})
module.exports=mongoose.model('Ticket',ticketSchema);