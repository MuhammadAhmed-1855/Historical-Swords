import axios from "axios";

const createSword = async (sword, token) => {
    try {
        const url = process.env.REACT_APP_API_URL;
    
        const response = await axios.post(`${url}/swords/create`, sword, {
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

export default createSword;