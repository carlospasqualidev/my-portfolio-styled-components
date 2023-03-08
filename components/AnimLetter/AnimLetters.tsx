import { CSSProperties } from "styled-components";
import { H3 } from "../Typography";
import * as s from "./styles";

interface IAnimLetters {
  text: string;
  style?: CSSProperties;
}

export const AnimLetters = ({ text, style }: IAnimLetters) => (
  <s.LetterContainer>
    {text.split("").map((element, index) => (
      <s.Letters style={style} key={element + index}>
        <H3> {element}</H3>
      </s.Letters>
    ))}
  </s.LetterContainer>
);
