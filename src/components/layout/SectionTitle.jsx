export const SectionTitle = ({ children, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <span className="text-xs uppercase tracking-[0.3em] text-primary-400">
          {label}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold text-dark-800 dark:text-dark-50">
        {children}
      </h2>
    </div>
  );
};
