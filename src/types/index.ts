export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  fullName: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantorFullName: string;
  guarantorPhoneNumber: string;
  guarantorEmail: string;
  guarantorRelationship: string;
}

export interface Stats {
  users: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}

export interface FilterParams {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}
