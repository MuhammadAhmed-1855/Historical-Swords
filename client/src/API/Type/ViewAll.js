import axios from "axios";

const viewAll = async (token) => {
    try {
        const url = process.env.REACT_APP_API_URL;
    
        const response = await axios.get(`${url}/types/all`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

export default viewAll;