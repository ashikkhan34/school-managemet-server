export interface IStaff {
  name: string;
  email: string;
  password: string;
  phone?: string;
  department: string;
  designation: string;
  joiningDate: string; // ISO string
  address?: string;
  image?: string;
}
