import * as S from "./styles";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "O treino é realmente personalizado?",
    answer:
      "Sim. Cada aluno recebe uma estrutura baseada no seu biotipo, rotina e objetivo específico. Nada é genérico.",
  },
  {
    question: "Preciso ter experiência com academia?",
    answer:
      "Não. O método funciona tanto para iniciantes quanto para quem já treina e está estagnado.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer:
      "Você terá ajustes periódicos e suporte direto para garantir evolução contínua.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem garantia de 7 dias. Se não fizer sentido para você, devolvemos seu investimento.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Perguntas Frequentes</S.Title>

        {faqData.map((item, index) => (
          <S.Item key={index}>
            <S.Question onClick={() => toggle(index)}>
              {item.question}
              <span>{active === index ? "-" : "+"}</span>
            </S.Question>

            <AnimatePresence>
              {active === index && (
                <S.Answer
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </S.Answer>
              )}
            </AnimatePresence>
          </S.Item>
        ))}
      </S.Content>
    </S.Container>
  );
}
