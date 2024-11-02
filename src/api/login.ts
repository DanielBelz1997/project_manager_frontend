import axios from "axios";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth`,
    credentials
  );

  return response.data;
};


