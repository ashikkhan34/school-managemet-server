import { z } from "zod";

export const studentValidation = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  department: z.string(),
  roll: z.string(),
  registration: z.string(),
  class: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
  image: z.string().optional(),
});
