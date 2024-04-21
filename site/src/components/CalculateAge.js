import { differenceInYears } from "https://unpkg.com/date-fns/differenceInYears.mjs";

export const calculateAge = (birthDate) => {
  const today = new Date();
  return differenceInYears(today, new Date(birthDate));
};