import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

import FloatingWhatsApp from "./FloatingWhatsApp";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <FloatingWhatsApp />
    <Footer />
  </div>
);

export default Layout;
