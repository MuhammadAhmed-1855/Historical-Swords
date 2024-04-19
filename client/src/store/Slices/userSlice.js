import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: sessionStorage.getItem('token') || "",
    email: sessionStorage.getItem('email') || "",
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { token, email } = action.payload;
            state.token = token;
            state.email = email;

            sessionStorage.setItem("token", token);
            sessionStorage.setItem("email", email);
        },
        removeUser: (state) => {
            state.token = "";
            state.email = "";

            sessionStorage.removeItem("token");
            sessionStorage.removeItem("email");
        },
    },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;