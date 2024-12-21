import { z } from "zod";
import { axiosInstance } from "./axiosInstance";
import { contactSchema } from "@/schemas/contact-schema";

export const createContact = async (
  contactValues: z.infer<typeof contactSchema.schema>
) => {
  try {
    const response = await axiosInstance.post("/contact", contactValues);
    return response?.data;
  } catch (e) {
    console.error("Error Creating Contact: ", e);
    throw new Error(`Failed to create contact. message: ${e}`);
  }
};

