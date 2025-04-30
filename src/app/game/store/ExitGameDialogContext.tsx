"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ExitGameDialogContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ExitGameDialogContext = createContext<
  ExitGameDialogContextProps | undefined
>(undefined);

export const ExitGameDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExitGameDialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ExitGameDialogContext.Provider>
  );
};

export const useExitGameDialog = (): ExitGameDialogContextProps => {
  const context = useContext(ExitGameDialogContext);
  if (!context) {
    throw new Error(
      "useExitGameDialog must be used within an ExitGameDialogProvider",
    );
  }
  return context;
};
