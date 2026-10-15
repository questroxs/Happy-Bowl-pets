import { createContext, useContext, type ReactNode } from "react";

const SupplierNotesContext = createContext(false);

export function SupplierNotesProvider({
  value,
  children,
}: {
  value: boolean;
  children: ReactNode;
}) {
  return <SupplierNotesContext.Provider value={value}>{children}</SupplierNotesContext.Provider>;
}

/** True only on happybowlpets.vercel.app, where warehouse and margin notes stay visible. */
export function useSupplierNotes(): boolean {
  return useContext(SupplierNotesContext);
}
