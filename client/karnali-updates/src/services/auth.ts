import axios from "axios";
import type { LoginData, LoginResponse, SignupData, SignupResponse } from "@/types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api";

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/accounts/login/`, data);
  return response.data;
};

export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  const { password2, email, username, password } = data;
  const body: Record<string, string> = {
    username,
    password,
    password2,
  };
  if (email) body.email = email;
  const response = await axios.post<SignupResponse>(`${API_URL}/accounts/signup/`, body);
  return response.data;
};
