export const Container = ({ children, id, className = "" }) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
};