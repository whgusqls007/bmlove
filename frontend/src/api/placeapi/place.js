import client from "../client";

export const savePlaceAxios = async (params) => {
    const response = await client.post("/places/place", params);
    return response;
};

export const getPlacesAxios = async (params) => {
    const response = await client.get("/places/place", { params: params });
    return response;
};
