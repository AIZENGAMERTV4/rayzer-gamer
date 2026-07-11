export default function Section({
  children,
  dark = false,
}) {
  return (
    <section
      className={`
        max-w-[1600px]
        mx-auto
        px-5
        lg:px-10
        py-10
        lg:py-16
        ${dark ? "section-dark" : ""}
      `}
    >
      {children}
    </section>
  );
}