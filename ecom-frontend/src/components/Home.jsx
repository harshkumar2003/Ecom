import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Home({search}) {
    const API = import.meta.env.VITE_API_URL;
    const [responseData, setResponseData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios.get(`${API}/api/products`)
            .then(res => setResponseData(res.data))
            .catch(() => setErrorMessage("Failed to load products"));
    }, []);
    const filterProducts = responseData.filter(p=>
        (p.name || "").toLowerCase().includes(search.toLowerCase()) ||
        (p.brand || "").toLowerCase().includes(search.toLowerCase()) ||
        (p.category || "").toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Product List
                </h1>

                {errorMessage && (
                    <p className="text-red-600 text-center mb-6">
                        {errorMessage}
                    </p>
                )}

                {responseData.length === 0 && !errorMessage ? (
                    <p className="text-center text-gray-500">
                        No products available
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filterProducts.map(product => (
                            <Link
                                key={product.id}
                                to={`/products/${product.id}`}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {product.name}
                                </h2>

                                <p className="text-gray-600 text-sm mb-4">
                                    {product.description}
                                </p>

                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-green-600 font-bold">
                                        ₹{product.price}
                                    </span>
                                    <span className="text-gray-500">
                                        Qty: {product.quantity}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
