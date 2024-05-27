import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const acceptRequest = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/friend-request/accept`,
    data
  );
  return response;
};

export const rejectRequest = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/friend-request/reject`,
    data
  );
  return response;
};
