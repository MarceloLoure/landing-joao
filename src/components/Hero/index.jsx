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
        Emagreça até <span>5kg em 30 dias</span> e crie constância
        mesmo que já tenha tentado antes.
      </S.Subtitle>

      <S.Description>
        🎯 Treino estruturado, nutrição acompanhada e método
        de fortalecimento mental.
      </S.Description>

      <S.Button onClick={goToCheckout}>
        👉 GARANTIR MINHA VAGA AGORA
      </S.Button>

      <S.Badges>
        <span>✔ Treino estruturado</span>
        <span>✔ Nutrição com especialista</span>
        <span>✔ Método de constância</span>
      </S.Badges>
    </S.ContentBottom>

    </>
  );
}
