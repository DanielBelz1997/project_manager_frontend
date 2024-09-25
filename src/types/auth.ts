enum UserEnum {
  Admin = 1,
  User = 2,
  Banned = 3,
}

export type User = {
  user: { id: number; name: string } | null;
  token: string | null;
  role: UserEnum
};

export type AuthState = {
  user: User['user'];
  token: User['token'];
  isAuthenticated: boolean;
  login: (user: User['user'], token: string) => void;
  logout: () => void;
}