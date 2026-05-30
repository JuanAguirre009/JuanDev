export const ProjectCard = ({ project, featured = false }) => {
  const href = project.href || "#";
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-50/85 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-primary-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60 dark:border-dark-800 dark:bg-dark-900/70 ${
        featured ? "md:col-span-4 md:flex md:flex-row-reverse" : "md:col-span-2"
      }`}
    >
      <div
        className={`overflow-hidden ${
          featured ? "md:w-1/2 md:min-h-full" : "h-48"
        }`}
      >
        <img
          src={project.cover}
          alt={project.title}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110 ${
            featured ? "min-h-[260px]" : ""
          }`}
          loading="lazy"
        />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:w-1/2" : ""}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-400/90">
          {project.category}
        </span>
        <h3 className="mt-3 text-xl font-bold text-dark-800 dark:text-dark-50">
          {project.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-dark-600 dark:text-dark-200">
          {project.excerpt}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2 text-[0.7rem] text-dark-500 dark:text-dark-200">
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
