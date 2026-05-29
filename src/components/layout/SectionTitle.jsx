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
          className={`text-xs uppercase tracking-[0.3em] text-primary-400 ${labelClassName}`}
        >
          {label}
        </span>
      ) : null}
      <h2
        className={`text-3xl font-bold text-dark-800 dark:text-dark-50 ${titleClassName}`}
      >
        {children}
      </h2>
    </div>
  );
};
