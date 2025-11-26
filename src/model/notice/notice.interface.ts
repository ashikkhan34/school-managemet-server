export interface INotice {
  title: string;
  description: string;
  date: string;          // ISO date string
  audience: "all" | "students" | "teachers" | "staff"; // notice audience
  attachment?: string;    // optional file URL
}
