import { Card, Flex } from "../../components";
import Image from "next/image";

import * as s from "./styles";
import { images } from "../../assets";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  LabelLg,
  LabelMd,
  LabelSm,
  P2,
  Subtitle,
  SubtitleBold,
} from "../../components/Typography";
import { useTheme } from "styled-components";

interface IExperiences {
  id: string;
}

export function Experiences({ id }: IExperiences) {
  const { sz } = useTheme();
  return (
    <Flex id="experiences" padding={`${sz.xlg5} 0 0 0`}>
      <Card width="300px">
        <s.CardContent>
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

          <H4>Desenvolvedor</H4>
          <H6>Ada Software House</H6>

          <P>01/06/2021 - XX/XX/XXXX</P>

          <ul>
            <li>
              <P>front end</P>
            </li>
            <li>
              <P>front end</P>
            </li>
            <li>
              <P>front end</P>
            </li>
          </ul>
        </s.CardContent>
      </Card>
    </Flex>
  );
}
