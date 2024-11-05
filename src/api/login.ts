import { axiosInstance } from "./axiosInstance";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, credentials);

    return response?.data;
  } catch (e: unknown) {
    console.log(e);
    throw new Error(String(e));
  }
};

export const role = async (token: string | null) => {
  const response = await axiosInstance.get(`/role`, {
    headers: {
      Authorization: `Breaer : ${token}`,
    },
  });
  return response.data;
};
