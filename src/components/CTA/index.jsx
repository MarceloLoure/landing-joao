import * as S from "./styles";
import { useScrollTo } from "../../hooks/useScrollsTo";

export default function CTA({
  children,
  target = "checkout",
  size = "md",
  fullWidth = false
}) {
  const scrollTo = useScrollTo(target);

  return (
    <S.Button
      onClick={scrollTo}
      $size={size}
      $fullWidth={fullWidth}
    >
      {children}
    </S.Button>
  );
}
