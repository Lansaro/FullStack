import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

const DisplayOne = () => {
    console.log(useParams());
    const [apiData, setApiData] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setApiData(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, []);
    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                console.log('SUCCESS');
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    return (
        <div className='Display-One'>
            <h2>Product: {apiData.title}</h2>
            <p>Price: {apiData.price}</p>
            <p>Description: {apiData.description}</p>
            <div>
                <p>Actions:</p>
                <Link to={`/product/edit/${apiData._id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={(e)=>{deleteProduct(apiData._id)}}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DisplayOne;