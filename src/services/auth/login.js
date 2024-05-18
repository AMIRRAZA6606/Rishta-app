import axios from "axios";
import { BASE_URL } from "../../config/systemConfigs";

export const login = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/login`, data);
  console.log("response-----------------------", response);
  return response;
};
