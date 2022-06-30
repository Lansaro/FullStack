import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayAll = () => {
    const [authors, setAuthors] = useState([]);
    const [order, setOrders] = useState("ASC");
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((allAuthors) => {setAuthors(allAuthors.data)})
            .catch((err) => console.log(err.response))
    });
    const deleteAuthor = (id, authorIndex) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                console.log('SUCCESS');
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== id;
                });
                setAuthors(filteredAuthors);
            })
            .catch((error) => {console.log(error.response.data)});
    };
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...authors].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setAuthors(sorted);
            setOrders("DSC");
        }
        if (order === "DSC") {
            const sorted = [...authors].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setAuthors(sorted);
            setOrders("ASC");
        }
    };
    return (
        <div>
            <h2>We have quotes by:</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col" onClick={()=>sorting('name')}>Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <Link to={`/author/edit/${author._id}`}>
                                        {author.name}
                                    </Link>
                                </td>
                                <td>
                                    <div>
                                        <Link to={`/author/edit/${author._id}`}>
                                            <p>Edit</p>
                                        </Link>
                                        <button onClick={() => deleteAuthor(author._id, index)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll;