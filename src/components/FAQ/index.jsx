import * as S from "./styles";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Preciso já estar treinando para participar?",
      answer:
        "Não. O programa foi criado justamente para quem já tentou várias vezes e não conseguiu manter constância. Você começa do seu nível atual."
    },
    {
      question: "Funciona para homens e mulheres?",
      answer:
        "Sim. Existem treinos estruturados específicos para masculino e feminino, organizados para seu objetivo."
    },
    {
      question: "E se eu não tiver academia?",
      answer:
        "Sem problema. Você também recebe treinos completos para fazer em casa. Aqui não existe desculpa."
    },
    {
      question: "Vou precisar fazer dieta restritiva?",
      answer:
        "Não. A parte nutricional foi estruturada por nutricionista parceira com foco em alimentação aplicável à rotina real. Sem radicalismo e sem dieta maluca."
    },
    {
      question: "E se eu não tiver disciplina?",
      answer:
        "É exatamente por isso que o módulo Mente & Constância existe. Você vai aprender a vencer a procrastinação e sustentar o processo mesmo quando a motivação acabar."
    },
    {
      question: "Em quanto tempo começo a ver resultado?",
      answer:
        "Seguindo o programa corretamente, você já começa a sentir diferença nas primeiras semanas. Em 30 dias, é possível perder até 5kg."
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer:
        "O acesso é imediato após a confirmação do pagamento e você poderá utilizar o programa durante todo o período proposto de 30 dias."
    }
  ];

  function toggle(index) {
    setActive(active === index ? null : index);
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>Perguntas Frequentes</S.Title>

        <S.List>
          {faqs.map((faq, index) => (
            <S.Item key={index}>
              <S.Question onClick={() => toggle(index)}>
                {faq.question}
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
                    {faq.answer}
                  </S.Answer>
                )}
              </AnimatePresence>
            </S.Item>
          ))}
        </S.List>
      </S.Content>
    </S.Container>
  );
}
