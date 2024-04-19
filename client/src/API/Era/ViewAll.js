import axios from 'axios';

const viewAllEras = async (token) => {
    try {
        const url = process.env.REACT_APP_API_URL;

        const response = await axios.get(`${url}/eras/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default viewAllEras;
