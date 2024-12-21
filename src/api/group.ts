import { axiosInstance } from "./axiosInstance";

export const getAllGroups = async () => {
  try {
    const response = await axiosInstance.get("/group");

    return response;
  } catch (e) {
    console.log(e);
  }
};
