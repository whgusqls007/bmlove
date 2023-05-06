import { createSlice } from "@reduxjs/toolkit";
import { savePlaceAction, getPlacesAction } from "./placeAction";

const initialState = {
    place: {},
    places: [],
};

const placeSlice = createSlice({
    name: "place",
    initialState,
    reducers: {
        resetData: (state) => {
            state.place = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(savePlaceAction.fulfilled, (state, { payload }) => {
            state.place = payload;
        });
        builder.addCase(savePlaceAction.rejected, (state, { payload }) => {
            state.place = payload;
            getPlacesAction();
        });
        builder.addCase(getPlacesAction.fulfilled, (state, { payload }) => {
            state.places = payload;
        });
        builder.addCase(getPlacesAction.rejected, (state, { payload }) => {
            state.places = payload;
        });
    },
});

export const { resetData } = placeSlice.actions;
export default placeSlice.reducer;
