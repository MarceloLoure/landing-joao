import {
  Container,
  Title,
  Grid,
  Item,
  Icon,
  Text,
  CTAWrapper
} from "./styles";
import { useCheckout } from "../../hooks/useCheckout";

export function Benefits() {
  const goToCheckout = useCheckout();

  return (
    <Container>
      <Title>🔥 O Que Você Pode Conquistar em 30 Dias</Title>

      <Grid>
        <Item>
          <Icon>✔️</Icon>
          <Text>Até 5kg a menos</Text>
        </Item>

        <Item>
          <Icon>✔️</Icon>
          <Text>Redução de gordura e mais firmeza corporal</Text>
        </Item>

        <Item>
          <Icon>✔️</Icon>
          <Text>Menos inchaço</Text>
        </Item>

        <Item>
          <Icon>✔️</Icon>
          <Text>Mais disposição</Text>
        </Item>

        <Item>
          <Icon>✔️</Icon>
          <Text>Mais confiança ao se olhar no espelho</Text>
        </Item>

        <Item>
          <Icon>✔️</Icon>
          <Text>Controle sobre a alimentação</Text>
        </Item>

        <Item>
          <Icon>✔️</Icon>
          <Text>Constância construída na prática</Text>
        </Item>
      </Grid>

      <CTAWrapper>
        <button onClick={goToCheckout}>👉 COMEÇAR AGORA</button>
      </CTAWrapper>
    </Container>
  );
}
