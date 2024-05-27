import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const sendMessage = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/chat/sendMessage`,
    data
  );
  return response;
};

export const getMessages = async (userId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/chat/getMessages/${userId}`
  );
  return response;
};
