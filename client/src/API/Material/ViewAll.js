import axios from 'axios';

const viewAllMaterials = async (token) => {
    try {
        const url = process.env.REACT_APP_API_URL;

        const response = await axios.get(`${url}/materials/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default viewAllMaterials;