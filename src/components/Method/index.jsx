import * as S from "./styles";
import { motion } from "framer-motion";

export default function Method() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          O Método <span>Energia Direcionada</span>
        </S.Title>

        <S.BreakBelief>
          Você não falha por falta de treino.
          <br />
          <strong>Você falha porque não consegue sustentar.</strong>
        </S.BreakBelief>

        <S.Description>
          A maioria começa motivada… mas não sabe lidar com o emocional
          quando a empolgação passa.
          <br /><br />
          O Método Energia Direcionada ensina você a usar sua energia
          emocional como combustível para agir — e não como sabotagem.
        </S.Description>

        <S.List>
          {[
            "Entender como o emocional interfere nos seus resultados",
            "Vencer a procrastinação",
            "Parar de se sabotar",
            "Transformar frustração em ação",
            "Criar constância mesmo quando a motivação acaba"
          ].map((item, index) => (
            <S.Item
              key={index}
              as={motion.li}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </S.Item>
          ))}
        </S.List>

        <S.Highlight>
          Aqui você aprende a direcionar sua energia para ação.
        </S.Highlight>
      </S.Content>
    </S.Container>
  );
}
