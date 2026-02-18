import * as S from "./styles";
import { motion } from "framer-motion";
import { useCheckout } from "../../hooks/useCheckout";

export default function OfferSoft() {
  const goToCheckout = useCheckout();

  const items = [
    {
      title: "Treinos Estruturados para Academia",
      text: "Treinos masculinos e femininos organizados, com vídeo explicativo e material em PDF para você levar no celular."
    },
    {
      title: "Treinos em Casa",
      text: "Sem academia? Sem problema. Você também recebe treinos completos para fazer em casa. Aqui não existe desculpa."
    },
    {
      title: "Nutrição Estratégica com Nutricionista",
      text: "Guia alimentar, cardápio prático, estratégias para rotina real e planejamento para finais de semana."
    },
    {
      title: "Módulo Mente & Constância",
      text: "Aulas práticas para vencer a procrastinação, criar disciplina e sustentar o processo até o fim."
    }
  ];

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          O Que Você Vai Receber no <span>Dessa Vez Vai</span>
        </S.Title>

        <S.Subtitle>
          Um programa estruturado para transformar corpo e mentalidade em 30 dias.
        </S.Subtitle>

        <S.Grid>
          {items.map((item, index) => (
            <S.Card
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </S.Card>
          ))}
        </S.Grid>

        <S.SoftCTA onClick={goToCheckout}>
            QUERO FAZER PARTE
        </S.SoftCTA>
      </S.Content>
    </S.Container>
  );
}
