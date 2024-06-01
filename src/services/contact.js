import { BASE_URL } from "../config/systemConfigs";
import axiosInstance from "../config/axiosInstance";

export const contactUs = async (data) => {
  const response = await axiosInstance.post(`${BASE_URL}/contact-us`, data);
  return response;
};