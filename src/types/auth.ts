// enum UserEnum {
//   Admin = 1,
//   User = 2,
//   Banned = 3,
// }

export type Credentials = {
  email: string;
  password: string;
};

export type AuthState = {
  clearLogin(): unknown;
  username: string | null;
  token: string | null;
  role: string | null;
  setRole: (role: string) => void;
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
};

