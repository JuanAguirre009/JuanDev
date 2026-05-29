import { STACK } from "../../data/stack";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { StackCard } from "../ui/StackCard";

const renderStack = (items) => (
  <ul className="grid grid-cols-3 gap-4 text-xs text-dark-600 dark:text-dark-200">
    {items.map((item) => {
      const Icon = item.icon;
      return (
        <li key={item.name} className="flex flex-col items-center gap-2">
          <Icon className="h-8 w-8" />
          <span className="text-center text-[11px] font-semibold uppercase tracking-[0.2em]">
            {item.name}
          </span>
        </li>
      );
    })}
  </ul>
);

export const Stack = () => {
  return (
    <section className="pt-24 motion-safe:animate-fade-up">
      <Container id="stack" className="max-w-6xl">
        <SectionTitle label="Tecnologias">Stack principal</SectionTitle>
        <p className="mt-4 max-w-2xl text-sm text-dark-600 dark:text-dark-200">
          Herramientas y tecnologias que uso para construir productos digitales
          de alto impacto.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <StackCard glow="rgba(0, 168, 232, 0.18)">
            <h3 className="mb-6 text-xl font-bold text-primary-500">Frontend</h3>
            {renderStack(STACK.frontend)}
          </StackCard>
          <StackCard reverse glow="rgba(148, 163, 184, 0.2)">
            <h3 className="mb-6 text-xl font-bold text-dark-700 dark:text-dark-200">
              Backend
            </h3>
            {renderStack(STACK.backend)}
          </StackCard>
          <StackCard glow="rgba(84, 219, 255, 0.2)">
            <h3 className="mb-6 text-xl font-bold text-daintree-400">
              Herramientas
            </h3>
            {renderStack(STACK.tools)}
          </StackCard>
          <StackCard reverse glow="rgba(255, 180, 114, 0.2)">
            <h3 className="mb-6 text-xl font-bold text-crusta-500">
              Aprendiendo
            </h3>
            {renderStack(STACK.learning)}
          </StackCard>
        </div>
      </Container>
    </section>
  );
};
