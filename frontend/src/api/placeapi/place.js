import client from "../client";

export const savePlaceAxios = async (params) => {
    const response = client.post("/places/place", params);
    return response;
};

export const getPlacesAxios = async (params) => {
    const response = client.get("/places/place", params);
    return response;
};

export const savePlaceImageAxios = async (params) => {
    const config = { "Content-Type": "Multipart/form-data" };
    const response = client.post("/places/place/image", params, config);
    return response;
};

export const getPlaceImagesAxios = async (params) => {
    const response = client.get("/places/place/images", params);
    return response;
};
