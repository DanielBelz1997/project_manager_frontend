import { z } from "zod";
import { axiosInstance } from "../axiosInstance";
import { formSchema } from "@/schemas/contact-schema";

export const createContact = async (
  contactValues: z.infer<typeof formSchema>
) => {
  try {
    const response = await axiosInstance.post("/contact", {
      contactValues,
    });
    return response?.data;
  } catch (e) {
    console.log(e);
  }
};
