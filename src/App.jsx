import { Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from "./pages/home";
import PoliticaPrivacidade from "./pages/politica-de-privacidade";
import TermosDeUso from "./pages/termos-de-uso";
import PoliticaDeReembolso from "./pages/politica-de-reembolso";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/termos-de-uso" element={<TermosDeUso />} />
      <Route path="/politica-de-reembolso" element={<PoliticaDeReembolso />} />
      <Analytics />
    </Routes>
  );
}

export default App;

