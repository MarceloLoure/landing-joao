import * as S from "./styles";
import { useCheckout } from "../../hooks/useCheckout";

export default function Hero() {
  const goToCheckout = useCheckout();

  return (
    <>
    <S.Container>
      <S.Overlay />

      <S.ContentTop>
        <S.Title>
          <span>DESSA</span>
          <br />
          <span>VEZ VAI</span>
        </S.Title>
      </S.ContentTop>
    </S.Container>

    <S.ContentBottom>
      <S.Subtitle>
        Emagreça até <span>5kg em 30 dias</span> saia da procrastinação e crie constância no treino, mesmo que você já tenha tentado várias vezes e desistido.
      </S.Subtitle>

      <S.Description>
        🎯 Treino estruturado, nutrição estratégica, mentalidade direcionada.
      </S.Description>

      <S.Button onClick={goToCheckout}>
        👉 GARANTIR MINHA VAGA AGORA
      </S.Button>
    </S.ContentBottom>

    </>
  );
}
