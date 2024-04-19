import axios from 'axios';

const createMaterial = async (material, token) => {
    try {
        const url = process.env.REACT_APP_API_URL;

        const response = await axios.post(`${url}/materials/create`, material, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default createMaterial;