import * as S from "./styles";
import { useCheckout } from "../../hooks/useCheckout";

export default function Hero() {
  const goToCheckout = useCheckout();

  return (
    <S.Container>
      <S.Content>
        <S.Title>DESSA VEZ VAI</S.Title>

        <S.Subtitle>
          Perca até 5kg em 30 dias
          <br />
          e construa constância no treino de uma vez por todas
        </S.Subtitle>

        <S.Description>
          Mesmo que você já tenha começado várias vezes e desistido.
        </S.Description>

        <S.Button onClick={goToCheckout}>
          QUERO COMEÇAR AGORA
        </S.Button>

        <S.Badges>
          <span>✔ Treino estruturado</span>
          <span>✔ Nutrição com especialista</span>
          <span>✔ Método de constância</span>
        </S.Badges>
      </S.Content>
    </S.Container>
  );
}
