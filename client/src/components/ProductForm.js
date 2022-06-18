import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: description
        })
        .then((response) => {
            console.log("SUCCESS");
            console.log(response);
        })
        .catch((err) => {
            console.log("ERROR");
            console.log(err.response);
            setErrors(err.response.data.errors);
        })
        setTitle('');
        setPrice('');
        setDescription('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>New Product Form</h2>
            <div>
                <label htmlFor="title">Title</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button>Create</button>
        </form>
    )
}

export default ProductForm;