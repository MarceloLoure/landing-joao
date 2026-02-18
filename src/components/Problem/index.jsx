import * as S from "./styles";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Por que você começa… <span>e nunca continua?</span>
        </S.Title>

        <S.Subtitle>
          O problema nunca foi falta de informação.
          <br />
          Foi falta de constância.
        </S.Subtitle>

        <S.List>
          {[
            "Já começou academia várias vezes e desistiu",
            "Sabe o que precisa fazer, mas não consegue manter constância",
            "Está acima do peso e incomodado com o próprio corpo",
            "Se compara com outras pessoas",
            "Tem vergonha de tirar a camiseta na praia",
            "Evita fotos porque não gosta do que vê",
            "Desconta ansiedade na comida",
            "Vive dizendo “segunda eu começo”"
          ].map((item, index) => (
            <S.Item
              key={index}
              as={motion.li}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {item}
            </S.Item>
          ))}
        </S.List>

        <S.Highlight>
          Se você se identificou com pelo menos 3 pontos,
          o problema não é falta de força de vontade.
          <br />
          <strong>É falta de direção.</strong>
        </S.Highlight>
      </S.Content>
    </S.Container>
  );
}
