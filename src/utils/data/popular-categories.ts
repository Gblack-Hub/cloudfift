import {
  Accounting,
  DataAnalyst,
  DesingArt,
  Education,
  HealthCare,
  Laptop,
  OilAndGas,
  Security,
} from "../exports/assets";
import { IPopularCategory } from "../../models/popular-categories";

export const popularCategoryData: IPopularCategory[] = [
  { id: 1, title: "Oil and Gas", notification: "20 new jobs", icon: OilAndGas },
  {
    id: 2,
    title: "Health Care",
    notification: "10 new jobs",
    icon: HealthCare,
  },
  { id: 3, title: "Education", notification: "10 new jobs", icon: Education },
  { id: 4, title: "Accounting", notification: "15 new jobs", icon: Accounting },
  {
    id: 5,
    title: "Design, Art and Multimedia",
    notification: "20 new jobs",
    icon: DesingArt,
  },
  { id: 6, title: "Technology", notification: "20 new jobs", icon: Laptop },
  { id: 7, title: "Security", notification: "2 new jobs", icon: Security },
  {
    id: 8,
    title: "Data analyst",
    notification: "5 new jobs",
    icon: DataAnalyst,
  },
];
