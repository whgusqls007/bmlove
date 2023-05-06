import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "../api/placeapi/placeSlice";

const store = configureStore({
    reducer: {
        place: placeReducer,
    },
});

export default store;
