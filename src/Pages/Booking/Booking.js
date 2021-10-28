import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const Booking = () => {
    const {serviceId}=useParams();
    const [service,setService]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>this is booking page {serviceId}</h2>
            <h1>name is {service.name}</h1>
        </div>
    );
};

export default Booking;