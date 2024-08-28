import axios from 'axios';

const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post('https://curso.tgconsulting.online/minipos/api/login', {
      username,
      password
    });

    // Supongamos que el token está en la segunda posición del array de respuesta
    const token = response.data[1];

    if (response.data[0] === 'OK' && token) {
      // Guarda el token en el almacenamiento local o en el estado
      localStorage.setItem('authToken', token);
      return true; // Autenticación exitosa
    } else {
      // Maneja el error de autenticación
      console.error('Error de autenticación:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Error al autenticar:', error);
    return false;
  }
};

export {
    authenticateUser
}