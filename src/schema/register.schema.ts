import { z } from "zod";

const registerValidationSchema = z.object({
  name: z.string().trim().min(4, "Username is required"),
  email: z.string().trim().email("Please enter a valid email address"),
  mobileNumber: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must be at most 15 digits"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export default registerValidationSchema;
