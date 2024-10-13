import "./globals.css";


export const metadata = {
  title: "Kadi Prestige",
  description: "Entreprise spécialisée dans la prestation de service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
