import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const UpdateOne = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [backErrors, setBackErrors] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                console.log(response);
                setName(response.data.name);
            })
            .catch((error) => {
                console.log(error.response)
            })
    // eslint-disable-next-line
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${id}`, {name})
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
            <h2>Edit this author:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                {backErrors.name ? <p style={{color:"red"}}>{backErrors.name.message}</p> : null}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateOne;