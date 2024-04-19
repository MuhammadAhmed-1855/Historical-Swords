import axios from "axios";

const viewAllMakers = async (token) => {
    try {
        const url = process.env.REACT_APP_API_URL;
    
        const response = await axios.get(`${url}/makers/all`, {
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

export default viewAllMakers;