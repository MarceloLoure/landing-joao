import * as S from "./styles";
import { motion } from "framer-motion";

const resultsData = [
  {
    id: 1,
    image: "result1.jpeg",
  },
  {
    id: 2,
    image: "result2.jpeg",
  },
  {
    id: 3,
    image: "result3.jpeg",
  },
];

export default function Results() {
  return (
    <S.Container id="results">
      <S.Content>
        <S.Title>
          Resultados <span>Reais</span>
        </S.Title>

        <S.Grid>
          {resultsData.map((item, index) => (
            <S.Card
              key={item.id}
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={`Resultado ${item.id}`} />
            </S.Card>
          ))}
        </S.Grid>
      </S.Content>
    </S.Container>
  );
}
