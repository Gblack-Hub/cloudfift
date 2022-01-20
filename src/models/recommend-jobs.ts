type TStatus = "Part time" | "Full time";

export interface IRecommendedJobs {
  id: number;
  status: TStatus;
  icon: string;
  position: string;
  company: string;
  location: string;
  apply: boolean;
}
