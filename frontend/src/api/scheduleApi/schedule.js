import client from "../client";

export const getSchedulesAxios = async (params) => {
  const response = client.get("/schedules/schedules", params);
  return response;
};
