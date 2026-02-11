import { useScrollTo } from "../../hooks/useScrollsTo";
import CTA from "../CTA";
import * as S from "./styles";

export default function Hero() {
    const scrollToCheckout = useScrollTo("checkout");

  return (
    <S.Container>
      <S.Overlay />

      <S.Content>
        <S.Badge>CONSULTORIA ONLINE PERSONALIZADA</S.Badge>

        <S.Title>
          Construa um físico forte e definido com um método focado em
          <span> hipertrofia real</span>
        </S.Title>

        <S.Description>
          Treino estratégico, plano alimentar estruturado e acompanhamento
          direto para você sair da estagnação e evoluir de verdade.
        </S.Description>

        <CTA onClick={scrollToCheckout}>
          QUERO TRANSFORMAR MEU CORPO
        </CTA>
      </S.Content>
    </S.Container>
  );
}
