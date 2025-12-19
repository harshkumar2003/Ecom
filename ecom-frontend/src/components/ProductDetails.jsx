import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


function ProductDetails()
{
    const API = import.meta.env.VITE_API_URL;
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const [error,setError] = useState("");

    useEffect(() => {
        axios.get(`${API}/api/products/${id}`)
            .then(res=>setProduct(res.data))
            .catch(()=>setError("Product Not Found"));
    }, [id]);
    if(error) return <p className="text-center mt-10 text-red-500">{error}</p>
    if(!product) return <p className="text-center mt-10">Loading....</p>
    return(
      <>
          <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <p className="text-gray-700 mb-2">
                  <b>Description:</b> {product.description}
              </p>

              <p><b>Brand:</b> {product.brand}</p>
              <p><b>Category:</b> {product.category}</p>
              <p><b>Price:</b> ₹{product.price}</p>
              <p><b>Quantity:</b> {product.quantity}</p>
              <p>
                  <b>Available:</b>{" "}
                  {product.avail ? "Yes" : "No"}
              </p>
          </div>
      </>
    )
}
export default ProductDetails;