import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className ?? ""}`}>
      <Container>{children}</Container>
    </section>
  );
}
