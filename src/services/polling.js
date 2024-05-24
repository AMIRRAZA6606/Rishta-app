import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const getMyReceivedFriendRequests = async (userId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/friend-request/received/${userId}`
  );
  console.log("response--------------", response);
  return response;
};
