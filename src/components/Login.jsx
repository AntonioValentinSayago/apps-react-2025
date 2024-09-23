import { useState } from "react";
import { authenticateUser } from "../utils/token"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook para redirigir al usuario

    const handleLogin = async (event) => {
        event.preventDefault();

        // const isAuthenticated = await authenticateUser('contacto@tecgurus.net', 'password');
        const isAuthenticated = await authenticateUser(username, password);
        if (isAuthenticated) {
            // Redirigir al usuario o cargar productos
            console.log('Autenticación exitosa');
            // Aquí podrías redirigir al usuario a otra página o cargar datos protegidos
            navigate('/dashboard'); // Redirigir al dashboard
        } else {
            // Mostrar un mensaje de error al usuario
            alert('Error en la autenticación. Verifica tus credenciales.');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                    <img src="https://cdn-icons-png.flaticon.com/512/5408/5408490.png" alt="Logo" className="w-30 h-20" />
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Iniciar sesión</h1>
                <form
                    onSubmit={handleLogin}
                >
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-600">Correo electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-600">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                         />
                        <a href="#" className="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
                </form>
                <div className="text-center">
                    <p className="text-sm">¿No tienes una cuenta? <a href="#" className="text-cyan-600">Regístrate ahora</a></p>
                </div>
                <p className="text-xs text-gray-600 text-center mt-10">&copy; 2024 TecGurus</p>
            </div>
        </div>
    )
}

export default Login