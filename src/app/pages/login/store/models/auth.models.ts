export interface User {
  username: string;
  email: string;
  displayName: string;
  roles: string[];
}

export interface AuthenticateByLogin {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthenticateResponse {
  authToken: string;
  refreshToken: string;
}
