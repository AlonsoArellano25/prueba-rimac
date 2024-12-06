import { Plan, PlanResponse } from "../interfaces/plan.interface";
import API from "./api";

export const getPlans = async (): Promise<Plan[]> => {
  try {
    const response = await API.get<PlanResponse>("/plans.json");
    return response.data.list;
  } catch (error) {
    console.error("Error fetching plans:", error);
    throw error;
  }
};
