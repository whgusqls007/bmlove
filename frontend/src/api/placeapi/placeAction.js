import { createAsyncThunk } from "@reduxjs/toolkit";
import { savePlaceAxios, getPlacesAxios } from "./place";

export const savePlaceAction = createAsyncThunk(
    "places/place",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await savePlaceAxios(params);
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getPlacesAction = createAsyncThunk(
    "place/place",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await getPlacesAxios({
                page: "0",
                size: "4",
                sort: "id,DESC",
            });
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
