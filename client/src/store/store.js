import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./Slices/userSlice";

const store = configureStore({
    reducer: {
        user: UserSlice,
    },
});

export default store;