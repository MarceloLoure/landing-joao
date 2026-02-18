import * as S from "./styles";
import { motion } from "framer-motion";
import { useCheckout } from "../../hooks/useCheckout";

export default function FinalOffer() {
  const goToCheckout = useCheckout();

  return (
    <S.Container>
      <S.Content
        as={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <S.Title>
          São Apenas <span>30 Dias</span> Para Mudar Seu Corpo
        </S.Title>

        <S.Text>
          Você já perdeu 30 dias antes.
          <br />
          Agora pode usar 30 dias para transformar seu corpo e sua mentalidade.
        </S.Text>

        <S.List>
          <li>✔ Perder até 5kg</li>
          <li>✔ Construir constância</li>
          <li>✔ Recuperar sua confiança</li>
          <li>✔ Assumir controle da sua rotina</li>
        </S.List>

        <S.Highlight>
          O problema nunca foi falta de informação.
          <br />
          Foi falta de constância.
        </S.Highlight>

        <S.Button onClick={goToCheckout}>
           <a
            href="https://payfast.greenn.com.br/redirect/251032"
            target="_blank"
            rel="noopener noreferrer"
          >
             GARANTIR MINHA VAGA AGORA
          </a>
         
        </S.Button>

        <S.Micro>
          Pagamento seguro • Acesso imediato • 30 dias de transformação
        </S.Micro>
      </S.Content>
    </S.Container>
  );
}
