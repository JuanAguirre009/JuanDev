import { ExternalLink } from "lucide-react";

const STACK_COLORS = {
  React: "border-sky-400/25 bg-sky-400/10 text-sky-600 dark:text-sky-300",
  "Next.js": "border-neutral-400/25 bg-neutral-400/10 text-neutral-600 dark:text-neutral-200",
  TypeScript: "border-blue-400/25 bg-blue-400/10 text-blue-600 dark:text-blue-300",
  JavaScript: "border-yellow-400/25 bg-yellow-400/10 text-yellow-600 dark:text-yellow-300",
  "C#": "border-purple-400/25 bg-purple-400/10 text-purple-600 dark:text-purple-300",
  ".NET": "border-purple-400/25 bg-purple-400/10 text-purple-600 dark:text-purple-300",
  "SQL Server": "border-red-400/25 bg-red-400/10 text-red-600 dark:text-red-300",
  "Node.js": "border-green-400/25 bg-green-400/10 text-green-600 dark:text-green-300",
  Python: "border-yellow-400/25 bg-yellow-400/10 text-yellow-600 dark:text-yellow-300",
  Docker: "border-cyan-400/25 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300",
  PostgreSQL: "border-blue-400/25 bg-blue-400/10 text-blue-600 dark:text-blue-300",
  MongoDB: "border-green-400/25 bg-green-400/10 text-green-600 dark:text-green-300",
};

const STACK_COLOR_DEFAULT =
  "border-dark-200/70 bg-white/80 text-dark-500 dark:border-dark-600/50 dark:bg-dark-700/60 dark:text-dark-200";

const CATEGORY_COLORS = {
  "Full Stack": "border-primary-400/30 bg-primary-400/15 text-primary-600 dark:text-primary-300",
  Backend: "border-amber-400/30 bg-amber-400/15 text-amber-600 dark:text-amber-300",
  Frontend: "border-sky-400/30 bg-sky-400/15 text-sky-600 dark:text-sky-300",
  Mobile: "border-green-400/30 bg-green-400/15 text-green-600 dark:text-green-300",
};

const CATEGORY_COLOR_DEFAULT =
  "border-white/15 bg-white/10 text-dark-600 dark:text-dark-100";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3.5 w-3.5 shrink-0"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const CardBadges = ({ category, date }) => {
  const colorClasses = CATEGORY_COLORS[category] ?? CATEGORY_COLOR_DEFAULT;

  return (
    <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
      <span
        className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm ${colorClasses}`}
      >
        {category}
      </span>

      {date && (
        <span className="rounded-full border border-white/10 bg-dark-900/70 px-2 py-0.5 text-[0.6rem] font-medium text-dark-100 backdrop-blur-sm">
          {date}
        </span>
      )}
    </div>
  );
};

const StackList = ({ stack }) => (
  <ul
    className="flex flex-wrap gap-1.5"
    aria-label="Tecnologías utilizadas"
  >
    {stack.map((tech) => (
      <li
        key={tech}
        className={`rounded-full border px-2 py-0.5 text-[0.62rem] font-medium transition-colors duration-200 ${
          STACK_COLORS[tech] ?? STACK_COLOR_DEFAULT
        }`}
      >
        {tech}
      </li>
    ))}
  </ul>
);

const CardActions = ({ githubFront, githubBack, href }) => (
  <div className="mt-4 flex flex-wrap items-center gap-2">
    {githubFront && (
      <a
        href={githubFront}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-dark-200/70 bg-white/80 px-3 py-2 text-[0.78rem] font-semibold text-dark-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-dark-300 hover:bg-white hover:text-dark-800 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-dark-200 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
      >
        <GithubIcon />
        Frontend
      </a>
    )}

    {githubBack && (
      <a
        href={githubBack}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-dark-200/70 bg-white/80 px-3 py-2 text-[0.78rem] font-semibold text-dark-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-dark-300 hover:bg-white hover:text-dark-800 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-dark-200 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
      >
        <GithubIcon />
        Backend
      </a>
    )}

    {!githubFront && !githubBack && (
      <span
        title="Repositorio privado"
        className="flex flex-1 cursor-not-allowed select-none items-center justify-center gap-2 rounded-xl border border-dark-200/40 bg-dark-100/30 px-3 py-2 text-[0.78rem] font-semibold text-dark-400 dark:border-white/5 dark:bg-white/[0.03] dark:text-dark-500"
      >
        <GithubIcon />
        Privado
      </span>
    )}

    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary-400/40 bg-primary-400/10 px-3 py-2 text-[0.78rem] font-semibold text-primary-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-400/60 hover:bg-primary-400/20 hover:text-primary-700 active:scale-95 dark:text-primary-300 dark:hover:text-primary-200"
      >
        <ExternalLink className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        Live Demo
      </a>
    ) : (
      <span
        title="Demo en desarrollo"
        className="flex flex-1 cursor-not-allowed select-none items-center justify-center gap-2 rounded-xl border border-dark-200/40 bg-dark-100/30 px-3 py-2 text-[0.78rem] font-semibold text-dark-400 dark:border-white/5 dark:bg-white/[0.03] dark:text-dark-500"
      >
        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
        En desarrollo
      </span>
    )}
  </div>
);

export const ProjectCard = ({ project }) => {
  const {
    title,
    subtitle,
    category,
    date,
    excerpt,
    cover,
    stack = [],
    githubFront = null,
    githubBack = null,
    href = null,
  } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-dark-200/60 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-400/30 hover:shadow-[0_28px_70px_-25px_rgba(0,0,0,0.18)] dark:border-white/[0.08] dark:bg-dark-900/80 dark:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] dark:hover:border-primary-400/20 dark:hover:shadow-[0_28px_70px_-25px_rgba(0,0,0,0.75),0_0_0_1px_rgba(99,179,237,0.12)]">
      <div className="relative mx-4 mt-4 aspect-[16/9] overflow-hidden rounded-xl border border-dark-200/40 bg-dark-100/50 dark:border-white/[0.08] dark:bg-dark-800">
        <img
          src={cover}
          alt={`Captura del proyecto ${title}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          loading="lazy"
          decoding="async"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-80"
        />

        <CardBadges category={category} date={date} />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        {subtitle && (
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-primary-500 dark:text-primary-400/80">
            {subtitle}
          </span>
        )}

        <h3 className="mt-1.5 text-[1.1rem] font-bold leading-snug text-dark-800 dark:text-white">
          {title}
        </h3>

        <p className="mt-2.5 text-[0.85rem] leading-relaxed text-dark-500 dark:text-dark-300">
          {excerpt}
        </p>

        <div
          aria-hidden="true"
          className="my-4 h-px w-full bg-dark-200/60 dark:bg-white/[0.06]"
        />

        <StackList stack={stack} />

        <CardActions
          githubFront={githubFront}
          githubBack={githubBack}
          href={href}
        />
      </div>
    </article>
  );
};