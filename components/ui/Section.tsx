export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative min-h-screen max-w-7xl mx-auto px-6 py-42"
    >
      {children}
    </section>
  );
}
