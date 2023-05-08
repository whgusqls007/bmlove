import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    savePlaceAxios,
    getPlacesAxios,
    savePlaceImageAxios,
    getPlaceImagesAxios,
} from "./place";

export const savePlaceAction = createAsyncThunk(
    "places/place/post",
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
    "places/places/get",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await getPlacesAxios({
                params: {
                    page: "0",
                    size: "4",
                    sort: "id,DESC",
                },
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

export const savePlaceImageAction = createAsyncThunk(
    "places/place/image/post",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await savePlaceImageAxios(params);
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

export const getPlaceImagesAction = createAsyncThunk(
    "places/place/images/get",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await getPlaceImagesAxios({
                params: {
                    page: "0",
                    size: "4",
                    sort: "id,DESC",
                },
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
