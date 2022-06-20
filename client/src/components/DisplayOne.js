import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const DisplayOne = () => {
    console.log(useParams());
    const [apiData, setApiData] = useState('');
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setApiData(response.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, []);
    return (
        <div>
            <h2>Product: {apiData.title}</h2>
            <p>Price: {apiData.price}</p>
            <p>Description: {apiData.description}</p>
        </div>
    )
}

export default DisplayOne;