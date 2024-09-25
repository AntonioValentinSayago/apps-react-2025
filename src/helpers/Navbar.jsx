import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar el token de autenticación
        localStorage.removeItem('authToken');

        // Redirigir al usuario al login
        navigate('/');
    }


    const handleViewCart = () => {
        navigate('/cart');
    };

    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="text-lg font-semibold">
                System POST
            </div>

            {/* Right Section: Profile Picture and Cart Icon */}
            <div className="flex items-center space-x-4">
                <div className="relative">
                    {/* Cart Icon with Badge */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
                </div>
                <button onClick={handleViewCart}>Ver Carrito </button>
                <button onClick={handleViewCart}>Productos </button>
                {/* Profile Picture */}
                <div className="w-8 h-8 rounded-full bg-blue-500">
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                        alt=""
                        className="w-8 h-8 rounded-full"
                    />
                </div>
                <button type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>


    )
}

export default Navbar