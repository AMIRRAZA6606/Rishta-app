import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const getProfileDetails = async (profileId) => {
  const response = await axiosInstance.get(`${BASE_URL}/profile/${profileId}`);
  return response;
};
