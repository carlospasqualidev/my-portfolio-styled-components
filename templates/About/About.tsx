import Image from "next/image";

import * as s from "./styles";
import { images } from "../../assets";
import { useTheme } from "../../styles/useTheme";
import { AnimLetters } from "../../components";

interface IAbout {
  id: string;
}

export function About({ id }: IAbout) {
  const { sz } = useTheme();
  return (
    <s.Background id={id}>
      <s.Container>
        <s.PcImage>
          <Image
            src={images.Me}
            width={350}
            height={350}
            alt=""
            style={{
              background: "image",
              borderRadius: sz.sm,
            }}
          />
        </s.PcImage>
        <s.MobileImage>
          <Image
            src={images.Me}
            width={250}
            height={250}
            alt=""
            style={{
              background: "image",
              borderRadius: sz.sm,
            }}
          />
        </s.MobileImage>
        <s.HeaderContainer>
          <AnimLetters
            style={{
              marginRight: sz.xsm,
              fontSize: "2rem", //xlg
            }}
            text="Sobre mim"
          />

          <p>
            Acadêmico de Engenharia da Computação na UNISATC. Desenvolvedor Web
            Full Stack na Ada Ada Lovelace Software House, com conhecimento em
            Javascript, Typescript e nos frameworks ReactJS, Styled Components,
            Nodejs, Prisma e Sequelize, experiência em modelagem de banco de
            dados e SQL utilizando postgresSQL. Atuou também, como professor no
            projeto Programando a Vida. Apaixonado pela programação, busca
            excelência no que faz, é proativo, gosta do compartilhamento e da
            troca de conhecimento.
          </p>
        </s.HeaderContainer>
      </s.Container>
    </s.Background>
  );
}
