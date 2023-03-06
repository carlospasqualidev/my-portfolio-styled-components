import { BackgroundCircles, MobileBackgroundCircles } from "../../Organisms";
import * as s from "./styles";

interface IHero {
  id: string;
}

export function Hero({ id }: IHero) {
  return (
    <s.Background id={id}>
      <s.PcContainer>
        <BackgroundCircles />
      </s.PcContainer>

      <s.MobileContainer>
        <MobileBackgroundCircles />
      </s.MobileContainer>
    </s.Background>
  );
}
