import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Form = () => {
    const [name, setName] = useState('');
    const [backErrors, setBackErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/authors', {name})
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.response);
                setBackErrors(error.response.data.errors);
            })
    }
    return (
        <div>
            <h2>Add a new author:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                {backErrors.name ? <p style={{color:"red"}}>{backErrors.name.message}</p> : null}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;