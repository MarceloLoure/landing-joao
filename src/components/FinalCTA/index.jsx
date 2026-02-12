import { useCheckout } from "../../hooks/useCheckout";
import * as S from "./styles";
import { motion } from "framer-motion";

export default function FinalCTA() {
    const goToCheckout = useCheckout();

  return (
    <S.Container>
      <S.Content
        as={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <S.Title>
          Chegou a hora de decidir:
          <span> continuar igual</span> ou começar sua transformação.
        </S.Title>

        <S.Subtitle>
          As vagas são limitadas para manter a qualidade do acompanhamento.
        </S.Subtitle>

        <S.Button onClick={goToCheckout} id="checkout">
          <a
            href="https://payfast.greenn.com.br/redirect/251032"
            target="_blank"
            rel="noopener noreferrer"
          >
            QUERO TRANSFORMAR MEU CORPO AGORA
          </a>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
