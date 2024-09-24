enum UserEnum {
  Admin = 1,
  User = 2,
  Banned = 3,
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserEnum;
};
