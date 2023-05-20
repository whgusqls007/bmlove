import { client, image } from "../client";

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
  const response = await image.post("/places/place/image", params);
  return response;
};

export const getPlaceImagesAxios = async (params) => {
  const response = image.get("/places/place/images", params);
  return response;
};
