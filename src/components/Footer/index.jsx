import * as S from "./styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <S.Container>
      <S.Content>

        <S.Top>
          <S.Brand>
            <h3>Dessa Vez Vai</h3>
            <p>Programa de Transformação em 30 Dias</p>

            <S.Contact>
              <span>Email: suporte@dessavezvai.com</span>
              <span>WhatsApp: (00) 00000-0000</span>
            </S.Contact>
          </S.Brand>

          <S.Links>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>

            <Link to="/termos-de-uso">Termos de Uso</Link>

            <Link to="/politica-de-reembolso">Política de Reembolso</Link>
          </S.Links>

          <S.Social>
            <a href="https://instagram.com/joaozera.personal/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {/* <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              YouTube
            </a> */}
          </S.Social>
        </S.Top>

        {/* <S.Disclaimer>
          Este produto não substitui acompanhamento médico ou nutricional individual.
          Os resultados podem variar de pessoa para pessoa.
        </S.Disclaimer> */}

        <S.Bottom>
          © {new Date().getFullYear()} Dessa Vez Vai. Todos os direitos reservados.
        </S.Bottom>

      </S.Content>
    </S.Container>
  );
}
