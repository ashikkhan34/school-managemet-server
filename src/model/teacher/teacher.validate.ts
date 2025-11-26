import { z } from "zod";

const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  passingYear: z.number().int().gte(1900, "Invalid passing year"),
  result: z.string().min(1, "Result is required"),
});

export const createTeacherSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Phone is required"),
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"),

  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),

  subject: z.string().min(1, "Subject is required"),
  experienceYears: z.number().int().min(0).optional(),
  joiningDate: z.string().min(1, "Joining date is required"),
  salary: z.number().min(0, "Salary is required"),

  education: z.array(educationSchema).min(1, "At least one education entry is required"),

  image: z.string().min(1, "Image is required"),
});

export const updateTeacherSchema = createTeacherSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: "At least one field must be provided for update" }
);
