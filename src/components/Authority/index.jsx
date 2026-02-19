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
            Especialista em transformação corporal e mental, com foco em emagrecimento. Meu trabalho não é apenas montar treinos, mas ajudar você a perder gordura, desenvolver constância e construir resultados que permanecem, através de um método claro.
          </p>

          <p>
            Ao longo da minha trajetória, já ajudei centenas de alunos a saírem da estagnação, recuperarem a confiança e conquistarem um estilo de vida mais saudável — mesmo após diversas tentativas sem sucesso.
          </p>

          <S.Highlight>
            Aqui, você não recebe um treino genérico. Recebe estratégia, acompanhamento e direção para emagrecer com segurança, clareza e evolução real.
          </S.Highlight>
        </S.Text>
      </S.Content>
    </S.Container>
  );
}
