export interface IEducation {
  degree: string;
  institution: string;
  passingYear: number;
  result: string;
}

export interface ITeacher {
  name: string;
  email: string;
  phone: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string; // ISO date string

  presentAddress: string;
  permanentAddress: string;

  subject: string;
  experienceYears?: number;
  joiningDate: string; // ISO date string
  salary: number;

  education: IEducation[];

  image: string;
}
