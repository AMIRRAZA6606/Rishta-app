import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const getMyFriends = async (userId, page, pageSize) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/friends/all/${userId}?page=${page}&pageSize=${pageSize}`
  );
  return response;
};
