import { STACK } from "../../data/stack";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { StackCard } from "../ui/StackCard";

const renderStack = (items) => (
  <ul className="grid grid-cols-2 gap-5 text-[0.8rem] text-dark-600 dark:text-dark-200 sm:grid-cols-3 sm:text-sm">
    {items.map((item) => {
      const Icon = item.icon;
      return (
        <li key={item.name} className="flex flex-col items-center gap-2">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              style={{ color: item.imageColor || undefined }}
              loading="lazy"
            />
          ) : Icon ? (
            <Icon
              className="h-12 w-12 sm:h-14 sm:w-14"
              style={{ color: item.color || "currentColor" }}
            />
          ) : null}
          <span className="text-center text-[0.8rem] font-medium text-dark-600 dark:text-dark-200 sm:text-sm">
            {item.name}
          </span>
        </li>
      );
    })}
  </ul>
);

export const Stack = () => {
  return (
    <section className="pt-28 pb-28 motion-safe:animate-fade-up sm:pt-32 sm:pb-28">
      <Container id="stack" className="max-w-5xl">
        <SectionTitle
          label="Tecnologias"
          titleClassName="text-4xl sm:text-5xl"
          labelClassName="tracking-[0.22em]"
        >
          Stack principal
        </SectionTitle>
        <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[17px] text-pretty">
          Herramientas y tecnologias que uso para construir productos digitales
          de alto impacto.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <StackCard glow="rgba(0, 168, 232, 0.18)">
            <h3 className="mb-8 text-2xl font-bold lg:text-3xl bg-gradient-to-t from-[#54fbff] to-[#00a4c9] dark:from-[#c9fffe] dark:to-[#00cfef] bg-clip-text text-transparent">
              Frontend
            </h3>
            {renderStack(STACK.frontend)}
          </StackCard>
          <StackCard reverse glow="rgba(148, 163, 184, 0.2)">
            <h3 className="mb-8 text-2xl font-bold lg:text-3xl bg-gradient-to-t from-[#94a3b8] to-[#1e293b] dark:from-[#f1f5f9] dark:to-[#64748b] bg-clip-text text-transparent">
              Backend
            </h3>
            {renderStack(STACK.backend)}
          </StackCard>
          <StackCard glow="rgba(84, 219, 255, 0.2)">
            <h3 className="mb-8 text-2xl font-bold lg:text-3xl bg-gradient-to-t from-[#75dbff] to-[#0072ab] dark:from-[#def3ff] dark:to-[#00a8e8] bg-clip-text text-transparent">
              Herramientas
            </h3>
            {renderStack(STACK.tools)}
          </StackCard>
          <StackCard reverse glow="rgba(255, 180, 114, 0.2)">
            <h3 className="mb-8 text-2xl font-bold lg:text-3xl bg-gradient-to-t from-[#ffb272] to-[#ee4a08] dark:from-[#ffebd4] dark:to-[#fd6412] bg-clip-text text-transparent">
              Aprendiendo
            </h3>
            {renderStack(STACK.learning)}
          </StackCard>
        </div>
      </Container>
    </section>
  );
};
