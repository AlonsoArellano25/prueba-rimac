import { NavigateFunction } from "react-router-dom";

/**
 @param navigate 
 */
export const handleBack = (navigate: NavigateFunction) => {
  navigate(-1);
};
