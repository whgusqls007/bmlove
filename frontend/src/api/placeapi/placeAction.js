import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    savePlaceAxios,
    getPlaceAxios,
    getPlacesAxios,
    // searchPlaceAxios,
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

export const getPlaceAction = createAsyncThunk(
    "places/place/get",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await getPlaceAxios({ params });
            return { data, type: params.type };
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                statusCode: error.response.status,
            });
        }
    }
);

export const getPlacesAction = createAsyncThunk(
    "places/places/get",
    async (params, { rejectWithValue }) => {
        try {
            // {
            //     params: {
            //         page: "0",
            //         size: "4",
            //         sort: "id,DESC",
            //     },
            // }
            const { data } = await getPlacesAxios();
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

// export const searchPlaceAction = createAsyncThunk(
//     "places/place/search",
//     async (params, { rejectWithValue }) => {
//         try {
//             const { data } = await searchPlaceAxios(params);
//             return data;
//         } catch (error) {
//             return rejectWithValue({
//                 message: error.message,
//                 statusCode: error.response.status,
//             });
//         }
//     }
// );

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
