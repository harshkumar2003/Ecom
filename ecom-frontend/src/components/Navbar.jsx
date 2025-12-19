import { Link } from "react-router-dom";
function Navbar({search,setSearch}) {
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo / Brand */}
                <div className="text-2xl font-bold text-blue-600">
                    ProductHub
                </div>

                {/* Category Dropdown */}
                <div className="hidden md:block">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Grocery</option>
                        <option>Accessories</option>
                    </select>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-6 hidden md:flex">
                    <input
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        type="text"
                        placeholder="Search products..."
                        className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Action Button */}
                <Link to={"/addProduct"}>
                    <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition">
                        + Add Product
                    </button>
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;
