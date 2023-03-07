import { Card } from "../../components";
import Image from "next/image";

import * as s from "./styles";
import { images } from "../../assets";

interface IExperiences {
  id: string;
}

export function Experiences({ id }: IExperiences) {
  return (
    <s.Background id="experiences">
      <Card>
        <Image
          src={images.Me}
          width={100}
          height={100}
          alt=""
          style={{
            background: "cover",
            borderRadius: "100%",
          }}
        />

        <h2>Desenvolvedor</h2>
        <h3>Ada Software House</h3>
      </Card>
    </s.Background>
  );
}
