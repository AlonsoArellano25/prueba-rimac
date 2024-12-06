import { User } from "../interfaces/user.interface";
import API from "./api";

export const getUserData = async (): Promise<User> => {
  try {
    const response = await API.get<User>("/user.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
