import React, { createContext, useState, ReactNode } from "react";

interface User {
  name: string;
  lastName: string;
  birthDay: string;
  documentType: string;
  documentNumber: string;
  phone: string;
}

interface SelectedPlan {
  title: string;
  finalCost: number;
}

interface AppContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedPlan: SelectedPlan | null;
  setSelectedPlan: (plan: SelectedPlan | null) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);

  return (
    <AppContext.Provider
      value={{ user, setUser, selectedPlan, setSelectedPlan }}
    >
      {children}
    </AppContext.Provider>
  );
};
