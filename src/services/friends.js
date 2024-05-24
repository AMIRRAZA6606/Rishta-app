import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const getMyFriends = async (userId) => {
  const response = await axiosInstance.get(`${BASE_URL}/friends/all/${userId}`);
  return response;
};
