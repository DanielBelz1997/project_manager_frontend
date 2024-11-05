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
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
};

