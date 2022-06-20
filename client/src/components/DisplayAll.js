import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';

const DisplayAll = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((allProducts) => {
                console.log(allProducts);
                setProducts(allProducts.data);
            })
            .catch((err) => console.log(err.response));
    }, []);
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
                                    <th scope="row">{product.title}</th>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                        <button>View</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>



    // <div>
    //   <table class="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">Name</th>
    //         <th scope="col">Cuisine</th>
    //         <th scope="col">Dish Image</th>
    //         <th scope="col">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {restaurants.map((restaurant, index) => {
    //         {
    //           console.log(restaurant);
    //         }
    //         return (
    //           <tr key={index}>
    //             <th scope="row">{restaurant.name}</th>
    //             <td>{restaurant.cuisine}</td>
    //             <td>{restaurant.dishImg}</td>
    //             <td>
    //               <button onClick={() => onHandleDelete(restaurant._id, index)}>
    //                 Delete
    //               </button>
    //               <button>
    //                 <Link to={`/restaurant/${restaurant._id}/edit`}>Edit</Link>
    //               </button>
    //               <Link to={`/restaurant/${restaurant._id}`}>details</Link>
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>


    )
}

export default DisplayAll;