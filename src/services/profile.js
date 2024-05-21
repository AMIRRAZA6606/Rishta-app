import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const searchProfiles = async (data) => {
  const response = await axiosInstance.post(`${BASE_URL}/search/profile`, data);
  return response;
};
