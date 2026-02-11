import * as S from "./styles";

export default function Problem() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Você treina, se esforça… mas
          <span> não vê resultado?</span>
        </S.Title>

        <S.Description>
          Dietas genéricas, treinos copiados da internet e falta de estratégia
          fazem você perder tempo e continuar estagnado.
        </S.Description>

        <S.List>
          <S.Item
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  viewport={{ once: true }}
>❌ Falta de evolução no shape</S.Item>
          <S.Item
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  viewport={{ once: true }}
>❌ Dificuldade para ganhar massa muscular</S.Item>
          <S.Item
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  viewport={{ once: true }}
>❌ Perda de motivação por não ver progresso</S.Item>
          <S.Item
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  viewport={{ once: true }}
>❌ Não saber o que realmente funciona</S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  );
}
