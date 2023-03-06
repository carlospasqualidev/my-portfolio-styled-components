import { CSSProperties } from "styled-components";
import * as s from "./styles";

interface IAnimLetters {
  text: string;
  style?: CSSProperties;
}

export const AnimLetters = ({ text, style }: IAnimLetters) => (
  <s.LetterContainer>
    {text.split("").map((element, index) => (
      <s.Letters style={style} key={element + index}>
        <p key={element + index}>{element}</p>
      </s.Letters>
    ))}
  </s.LetterContainer>
);
