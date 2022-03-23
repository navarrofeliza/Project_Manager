/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import axios from 'axios';

export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    //onChange to update the product information
    return (
        <div class="text-center">
            <title>
                Product Manager
            </title>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Title</label><br/>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </p>
                    <p>
                        <label>Price</label><br/>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                    </p>
                    <button className="btn btn-primary btn-block" value="form" type="submit">Submit</button>
                </form>
            </div>
    )
}

