"use client";
import React, { createContext, useContext, useState } from "react";

// Define the form data shape
type FormData = {
  name: string;
  email: string;
  tel: string;
  plan: string;   // e.g. "Arcade", "Advanced", "Pro"
  price: string;  // e.g. "$90/yr" or "$9/mo"
  billing: "monthly" | "yearly"; // billing frequency
};

type FormContextType = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
};

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider component
export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>({
    name: "",
    email: "",
    tel: "",
    plan: "",
    price: "",
    billing: "monthly",
  });

  // Merge new values into state
  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook for easier usage
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used inside FormProvider");
  return context;
};
