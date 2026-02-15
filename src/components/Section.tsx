import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className }: Props) {
  return (
    <section
      id={id}
      className={`min-h-screen px-6 py-20 max-w-6xl mx-auto ${className || ""}`}
    >
      {children}
    </section>
  );
}
