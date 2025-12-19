import {useState,useEffect} from "react";
import axios from "axios";
function AddProduct()
{
    const API = import.meta.env.VITE_API_URL;
    const[product,setProduct] = useState({
        name : "",
        description: "",
        brand: "",
        price: "",
        category: "",
        releaseDate: "",
        avail: false,
        quantity: ""
    })

    function handleChange(e)
    {
        const {name , value , type , checked} = e.target;
        setProduct({...product , [name]: type === "checkbox" ? checked  : value});
    }
    function handleSubmit(e)
    {
        e.preventDefault();


            axios.post(`${API}/api/products`,{...product , price : Number(product.price), quantity: Number(product.quantity)})
                .then(res=>{console.log(res.data);
                    setProduct({
                        name: "",
                        description: "",
                        brand: "",
                        price: "",
                        category: "",
                        releaseDate: "",
                        avail: false,
                        quantity: ""
                    });
                })
                .catch(err=>console.log(err));


    }


    return(
        <>
            <h2>Add Product</h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Add Product
                </h2>

                {/* Product Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none resize-none"
                        required
                    />
                </div>

                {/* Brand & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Brand
                        </label>
                        <input
                            type="text"
                            name="brand"
                            value={product.brand}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Price & Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Price (₹)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Release Date & Availability */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Release Date
                        </label>
                        <input
                            type="datetime-local"
                            name="releaseDate"
                            value={product.releaseDate}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            required
                        />
                    </div>

                    <label className="flex items-center gap-2 mt-6 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            name="avail"
                            checked={product.avail}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        Available
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition"
                >
                    Add Product
                </button>
            </form>

        </>
    )
}

export default AddProduct;