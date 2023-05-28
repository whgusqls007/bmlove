import client from "../client";

export const getSchedulesAxios = async (params) => {
  const response = client.get("/schedules/schedules", params);
  return response;
};

export const getSchedulesOfMonthAxios = async (params) => {
  const response = client.get("/schedules/schedules/month", params);
  return response;
};
