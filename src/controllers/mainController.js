import {request,response} from "express";
import dynamicContent from "../config/content.js";

const home = ((req = request, res = response)=>{
    res.sendFile( dynamicContent("index.html") );
});

const contact = ((req = request, res = response)=>{
    res.sendFile( dynamicContent("contact.html") );
});

const services = ((req = request, res = response)=>{
    res.sendFile( dynamicContent("services.html") );
});



export{
    home, contact, services
}