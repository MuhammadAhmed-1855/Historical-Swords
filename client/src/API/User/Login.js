import axios from "axios";
import { setUser } from "../../store/Slices/userSlice";

export const login = async (user, dispatch) => {
    try {
        const url = process.env.REACT_APP_API_URL;

        const response = await axios.post(`${url}/users/login`, user);

        console.log("Res: ", response.data);

        dispatch(setUser({
            token: response.data,
            email: user.email
        }));

        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default login;