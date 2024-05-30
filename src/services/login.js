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

export const verifyOtp = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/verify-otp`, data);
  return response;
};

export const updatePassword = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/reset-password`, data);
  return response;
};
