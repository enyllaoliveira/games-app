import { ReactNode } from "react";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="ml-64 bg-slate-900 h-screen">{children}</div>;
};
