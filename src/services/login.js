import axios from "axios";
import { BASE_URL } from "../config/systemConfigs";

export const login = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/login`, data);
  return response;
};

export const sendOtp = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/forgot-password`, data);
  return response;
};
