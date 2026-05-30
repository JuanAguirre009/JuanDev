export const SectionTitle = ({
  children,
  label,
  titleClassName = "",
  labelClassName = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <span
          className={`text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-primary-500/90 dark:text-primary-300/90 ${labelClassName}`}
        >
          {label}
        </span>
      ) : null}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight text-dark-800 dark:text-dark-50 sm:text-4xl lg:text-5xl ${titleClassName}`}
      >
        {children}
      </h2>
    </div>
  );
};
