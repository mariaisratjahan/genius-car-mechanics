import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    const handleDeleteBtn=(id)=>{
        fetch(`http://localhost:5000/services/${id}`,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('deteted successfully')
               const remaining= services.filter(service => service._id !== id)
               setServices(remaining);
            }
        })

    }
    return (
        <div>
            <h2>manageServices</h2>
            {
                services.map(service=><div key={service._id}>
                    <h4>{service.name} || {service.description}</h4>
                    <button onClick={()=>handleDeleteBtn(service._id)} className="btn btn-primary">delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;