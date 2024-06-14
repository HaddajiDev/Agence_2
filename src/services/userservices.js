import axios from 'axios';

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return null; // Handle case where token is not available
    }

    const response = await axios.get('http://localhost:5000/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Return user data
  } catch (error) {
    console.error('Error fetching current user', error);
    return null;
  }
};

export default getCurrentUser;