import "./globals.css";

export const metadata = {
  title: "Gravity Company"
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className="bg-[#0b0b0b] text-white selection:bg-white/10 selection:text-white">
        {children}
      </body>
    </html>
  );
}