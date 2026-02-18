import * as S from "./styles";
import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <S.Container>
      <S.Content
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <S.Badge>🛡 Garantia Incondicional</S.Badge>

        <S.Title>
          Teste o Programa por <span>7 Dias</span>
        </S.Title>

        <S.Text>
          Você entra, acessa os treinos, aplica o método e testa na prática.
        </S.Text>

        <S.Text>
          Se dentro de 7 dias você sentir que o programa não é para você,
          basta enviar uma mensagem e devolvemos 100% do seu investimento.
        </S.Text>

        <S.Highlight>
          Sem burocracia. Sem perguntas constrangedoras.
        </S.Highlight>

        <S.Footer>
          O risco é zero. A decisão é sua.
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}
