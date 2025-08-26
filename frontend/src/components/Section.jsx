export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}
