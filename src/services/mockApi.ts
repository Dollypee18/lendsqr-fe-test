import { User, Stats } from "../types";

const orgs = ["Lendsqr", "Irorun", "Lendstar"];
const statuses: User["status"][] = [
  "Active",
  "Inactive",
  "Pending",
  "Blacklisted",
];
const firstNames = [
  "Grace",
  "Debby",
  "Tosin",
  "John",
  "Jane",
  "Michael",
  "Sarah",
  "David",
  "Emma",
  "James",
];
const lastNames = [
  "Effiom",
  "Ogana",
  "Dokunmu",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
];
const educationLevels = ["B.Sc", "M.Sc", "Ph.D", "HND", "OND"];
const employmentStatuses = ["Employed", "Unemployed", "Self-employed"];
const sectors = [
  "FinTech",
  "Healthcare",
  "Education",
  "Technology",
  "Agriculture",
];
const residenceTypes = [
  "Parent's Apartment",
  "Own Apartment",
  "Rented Apartment",
];
const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
const genders = ["Male", "Female"];

const generatePhoneNumber = (): string => {
  return `0${Math.floor(7000000000 + Math.random() * 3000000000)}`;
};

const generateEmail = (firstName: string, lastName: string): string => {
  const providers = ["gmail.com", "yahoo.com", "lendsqr.com", "irorun.com"];
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${providers[Math.floor(Math.random() * providers.length)]}`;
};

const generateBVN = (): string => {
  return Math.floor(10000000000 + Math.random() * 90000000000).toString();
};

const generateDate = (): string => {
  const start = new Date(2018, 0, 1);
  const end = new Date(2020, 11, 31);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return (
    date.toISOString().split("T")[0] + " " + date.toTimeString().split(" ")[0]
  );
};

const generateIncome = (): string => {
  const min = 200000;
  const max = 500000;
  const income = Math.floor(min + Math.random() * (max - min));
  return `₦${income.toLocaleString()}.00 - ₦${(income + 200000).toLocaleString()}.00`;
};

const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateUser = (id: number): User => {
  const firstName = random(firstNames);
  const lastName = random(lastNames);
  const fullName = `${firstName} ${lastName}`;
  const username = `${firstName}${id}`;

  return {
    id: id.toString(),
    organization: random(orgs),
    username,
    email: generateEmail(firstName, lastName),
    phoneNumber: generatePhoneNumber(),
    dateJoined: generateDate(),
    status: random(statuses),
    fullName,
    bvn: generateBVN(),
    gender: random(genders),
    maritalStatus: random(maritalStatuses),
    children: Math.floor(Math.random() * 5).toString(),
    typeOfResidence: random(residenceTypes),
    levelOfEducation: random(educationLevels),
    employmentStatus: random(employmentStatuses),
    sectorOfEmployment: random(sectors),
    durationOfEmployment: `${Math.floor(1 + Math.random() * 10)} years`,
    officeEmail: generateEmail(firstName, lastName),
    monthlyIncome: generateIncome(),
    loanRepayment: `${Math.floor(10000 + Math.random() * 90000).toLocaleString()}`,
    twitter: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    facebook: fullName,
    instagram: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    guarantorFullName: `${random(firstNames)} ${random(lastNames)}`,
    guarantorPhoneNumber: generatePhoneNumber(),
    guarantorEmail: generateEmail(random(firstNames), random(lastNames)),
    guarantorRelationship: random([
      "Sister",
      "Brother",
      "Friend",
      "Colleague",
      "Parent",
    ]),
  };
};

const generateUsers = (): User[] => {
  const users: User[] = [];
  for (let i = 1; i <= 500; i++) {
    users.push(generateUser(i));
  }
  return users;
};

let cachedUsers: User[] | null = null;

export const getUsers = (): User[] => {
  if (!cachedUsers) {
    cachedUsers = generateUsers();
  }
  return cachedUsers;
};

export const getUserById = (id: string): User | undefined => {
  return getUsers().find((user) => user.id === id);
};

export const getStats = (): Stats => {
  const users = getUsers();
  return {
    users: users.length,
    activeUsers: users.filter((u) => u.status === "Active").length,
    usersWithLoans: Math.floor(users.length * 0.25),
    usersWithSavings: Math.floor(users.length * 0.2),
  };
};
