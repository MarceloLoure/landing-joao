import * as S from "./styles";
import { motion } from "framer-motion";

export default function Method() {
  return (
    <S.Container>
      <S.Content>
        <S.Badge>MÉTODO JOÃOZERA</S.Badge>

        <S.Title>
          Um sistema estruturado para gerar
          <span> hipertrofia consistente</span>
        </S.Title>

        <S.Grid>
          <S.Card
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>1. Avaliação Estratégica</h3>
            <p>
              Análise completa do seu biotipo, rotina e objetivo para montar
              um plano realmente personalizado.
            </p>
          </S.Card>

          <S.Card
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>2. Treino Personalizado</h3>
            <p>
              Estruturação inteligente de cargas, volume e progressão para
              acelerar ganhos de massa muscular.
            </p>
          </S.Card>

          <S.Card
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>3. Estratégia Nutricional</h3>
            <p>
              Direcionamento alimentar focado em performance e recuperação
              muscular.
            </p>
          </S.Card>

          <S.Card
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>4. Acompanhamento Contínuo</h3>
            <p>
              Ajustes semanais para garantir evolução constante e evitar
              estagnação.
            </p>
          </S.Card>
        </S.Grid>
      </S.Content>
    </S.Container>
  );
}
