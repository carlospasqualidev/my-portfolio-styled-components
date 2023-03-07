import { BackgroundCircles } from "../../components";
import { MobileBackgroundCircles } from "../../components/BackgroundCircles";
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
