export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

/** Fields sent to POST /accounts/signup/ — adjust if your API differs. */
export interface SignupData {
  username: string;
  password: string;
  password2: string;
  email?: string;
}

/** Many backends return JWT pair; others return 201 with a user payload only. */
export type SignupResponse = Partial<LoginResponse> & {
  username?: string;
  user?: { username?: string };
};
