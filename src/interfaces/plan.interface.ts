export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlanResponse {
  list: Plan[];
}
