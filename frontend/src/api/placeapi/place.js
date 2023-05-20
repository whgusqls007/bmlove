import client from "../client";

export const savePlaceAxios = async (params) => {
  const response = client.post("/places/place", params);
  return response;
};

export const getPlaceAxios = async (params) => {
  const response = client.get(`/places/place`, params);
  return response;
};

export const getPlacesAxios = async (params) => {
  const response = client.get(`/places/places`, params);
  return response;
};

export const savePlaceImageAxios = async (params) => {
  const config = {
    headers: {
      "Content-Type": "Multipart/form-data",
    },
  };

  const response = await client.post("/places/place/image", params, config);
  return response;
};

export const getPlaceImagesAxios = async (params) => {
  const response = client.get("/places/place/images", params);
  return response;
};
