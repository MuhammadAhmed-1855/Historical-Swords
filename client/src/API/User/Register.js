// Use API to regsiter user

import axios from "axios";

export const register = async (user) => {
    try {
        const url =  process.env.REACT_APP_API_URL;

        const response = await axios.post(`${url}/users/register`, user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default register;