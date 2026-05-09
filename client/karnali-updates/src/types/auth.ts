export interface LoginData {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    access: string;
    refresh: string;
  }