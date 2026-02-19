import * as S from "./styles";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          🚨 Para quem é esse programa?
        </S.Title>

        <S.Subtitle>
          O Dessa Vez Vai é para homens e mulheres que:
        </S.Subtitle>

        <S.List>
          {[
            "Já começaram academia várias vezes e desistiram",
            "Sabem o que precisam fazer, mas não conseguem manter constância",
            "Estão acima do peso e incomodados com o próprio corpo",
            "Se comparam com outras pessoas",
            "Têm vergonha de tirar a camiseta na praia",
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
          💥 Se você está cansado de começar e parar, esse programa foi feito pra você.
        </S.Highlight>
      </S.Content>
    </S.Container>
  );
}
