import React from 'react';
import { Placeholder } from 'react-bootstrap';
import axios from 'axios';

import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services',data)
        .then(res =>{
            // ayedik mainly result ta astece
            console.log(res);
            reset();
        })
    }
    
    
    return (
        <div>
            <h2>please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 }) }
                Placeholder="name" />
                <textarea {...register("description")} Placeholder="Description" />
                <input type="number" {...register("price")} Placeholder="Price" />
                <input {...register("img")} Placeholder="Image" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;