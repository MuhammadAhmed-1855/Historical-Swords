import axios from "axios";

const createType = async (type, token) => {
    try {
        const url = process.env.REACT_APP_API_URL;
    
        const response = await axios.post(`${url}/types/create`, type, {
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

export default createType;