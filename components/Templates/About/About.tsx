import { AnimLetters } from "../../Atoms/Anims";
import Image from "next/image";

import * as s from "./styles";
import { images } from "../../../assets";
import { useTheme } from "../../../styles/useTheme";
import { Card } from "../../Molecules";

interface IAbout {
  id: string;
}

export function About({ id }: IAbout) {
  const { sz } = useTheme();
  return (
    <s.Background id={id}>
      <Image
        src={images.Me}
        width={400}
        height={400}
        alt=""
        style={{
          background: "image",
          borderRadius: sz.sm,
        }}
      />
      <s.Container>
        <Card>
          <AnimLetters style={{ marginRight: "20px" }} text="Sobre mim" />
        </Card>
      </s.Container>
    </s.Background>
  );
}
