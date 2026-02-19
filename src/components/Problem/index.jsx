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
            "⁠Se incomodam com a própria barriga.",
            "em vergonha das celulites.",
            "⁠Se comparam com outras pessoas.",
            "⁠Vivem sem disposição e no “segunda eu começo.",
            "⁠Sabem o que precisa fazer mas não conseguem manter constância.",
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
