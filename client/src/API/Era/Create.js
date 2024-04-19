import axios from "axios";

export const createEra = async (era, token) => {
    try {
        const url = process.env.REACT_APP_API_URL;

        const response = await axios.post(`${url}/eras/create`, era, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default createEra;