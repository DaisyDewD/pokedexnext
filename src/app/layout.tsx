import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Pokédex construida con Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="app">{children}</div>
      </body>
    </html>
  );
}