
import * as S from "./styles";
import { motion } from "framer-motion";
import CTA from "../CTA";

export default function Offer() {


  return (
    <S.Container id="offer">
      <S.Content
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <S.Badge>OFERTA ESPECIAL</S.Badge>

        <S.Title>
          Comece agora sua transformação com acompanhamento
          <span> 100% personalizado</span>
        </S.Title>

        <S.List>
          <li>✔ Treino individualizado</li>
          <li>✔ Estratégia nutricional direcionada</li>
          <li>✔ Ajustes semanais</li>
          <li>✔ Suporte direto comigo</li>
        </S.List>

        <S.Guarantee>
          🔒 Garantia de 7 dias — se não gostar, devolvemos seu investimento.
        </S.Guarantee>

        <CTA>
          QUERO TRANSFORMAR MEU CORPO AGORA
        </CTA>
      </S.Content>
    </S.Container>
  );
}
