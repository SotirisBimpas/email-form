import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="p-3 rounded-3xl flex-col items-start justify-start">
      {children}
    </div>
  );
}
