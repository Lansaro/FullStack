import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const DisplayAll = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((allProducts) => {
                console.log(allProducts);
                setProducts(allProducts.data);
            })
            .catch((err) => console.log(err.response));
    }, []);
    const deleteProduct = (id, prodIndex) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                console.log('SUCCESS');
                const filteredProducts = products.filter((product, index) => {
                    return prodIndex !== index;
                });
                setProducts(filteredProducts);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    return (
        <div>
            <div className="App-Form">
                <ProductForm />
            </div>
            <div className="App-Records">
                <h2>All Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <Link to={`/product/${product._id}`}>
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <Link to={`/product/edit/${product._id}`}>
                                            <button>Edit</button>
                                        </Link>
                                        <button onClick={() => deleteProduct(product._id, index)}>
                                            Delete
                                        </button>
                                        <Link to={`/product/${product._id}`}>
                                            <button>View</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayAll;