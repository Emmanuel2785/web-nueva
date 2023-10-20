import "../styles/globals.css";
import "../styles/institucional.css";
import "../styles/autoridades.css";
import "../styles/contacto.css";
import "../styles/operativos.css";
import "../styles/publicaciones.css";
import "../styles/condicionesvida.css";
import "../styles/mercadolaboral.css";
import { Inter } from "next/font/google";
import { Navigation } from "./components/Navigation";
import { Cabecera } from "./components/Cabecera";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WEB-DPE",
  description: "Departamento de sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Navigation />
        <Cabecera />
        {children}
      </body>
    </html>
  );
}
