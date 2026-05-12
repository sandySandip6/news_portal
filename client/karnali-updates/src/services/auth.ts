import axios from "axios";
import { LoginData, LoginResponse } from "@/types/auth";

const API_URL = "http://127.0.0.1:8000/api";

// export const loginUser = async (
//   data: LoginData
// ): Promise<LoginResponse> => {
//   const response = await axios.post(
//     `${API_URL}/token/`,
//     data
//   );

//   return response.data;
// };

export const loginUser = async (data:LoginData): Promise <LoginResponse> =>{
    const response = await axios.post(`${API_URL}/accounts/login/`,data)
    return response.data;
}