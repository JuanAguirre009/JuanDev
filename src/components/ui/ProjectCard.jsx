export const ProjectCard = ({ project }) => {
  const href = project.href || "#";
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-dark-50/85 shadow-[0_20px_60px_-40px_rgba(8,12,30,0.85)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-45px_rgba(8,14,32,0.95)] hover:ring-1 hover:ring-primary-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60 dark:border-dark-800 dark:bg-dark-900/80"
    >
      <div className="relative p-4 sm:p-5">
        <div className="relative aspect-[16/9] min-h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-dark-900/60 sm:min-h-[220px]">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:brightness-110"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/45" />
        </div>
        <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2 sm:left-7 sm:top-7">
          <span className="rounded-full border border-white/15 bg-dark-900/75 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-dark-100 backdrop-blur">
            {project.category}
          </span>
          {project.status ? (
            <span className="rounded-full border border-primary-400/30 bg-primary-400/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-primary-200">
              {project.status}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-1">
        {project.subtitle ? (
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-400/90">
            {project.subtitle}
          </span>
        ) : null}
        <h3 className="mt-3 text-[1.2rem] font-bold text-dark-800 dark:text-dark-50">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.92rem] leading-relaxed text-dark-600 dark:text-dark-200">
          {project.excerpt}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5 text-[0.68rem] text-dark-500 dark:text-dark-200">
          {project.stack.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="rounded-full border border-dark-200/70 bg-white/80 px-2.5 py-1 dark:border-dark-700 dark:bg-dark-800/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};
