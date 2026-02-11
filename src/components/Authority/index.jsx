import * as S from "./styles";
import { motion } from "framer-motion";

export default function Authority() {
  return (
    <S.Container id="authority">
      <S.Content>
        <S.ImageWrapper
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/joao-personal.jpeg" alt="João Victor - Personal Trainer" />
        </S.ImageWrapper>

        <S.Text
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <S.Badge>QUEM VAI TE ACOMPANHAR</S.Badge>

          <h2>
            João Victor <span>Personal Trainer</span>
          </h2>

          <p>
            Especialista em transformação corporal focada em hipertrofia e
            emagrecimento estratégico. Meu trabalho não é apenas montar treinos,
            mas estruturar um método que gera evolução real e consistente.
          </p>

          <p>
            Já ajudei dezenas de alunos a saírem da estagnação e conquistarem
            resultados que nunca haviam alcançado sozinhos.
          </p>

          <S.Highlight>
            Aqui você não recebe um treino genérico.
            <br />
            Você recebe estratégia, acompanhamento e direção.
          </S.Highlight>
        </S.Text>
      </S.Content>
    </S.Container>
  );
}
