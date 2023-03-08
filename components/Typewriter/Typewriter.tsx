import { Cursor, useTypewriter } from "react-simple-typewriter";
import { CSSProperties } from "styled-components";
import { H4 } from "../Typography";

interface ITypeWriter {
  words: string[];
  style?: CSSProperties;
}

export const Typewriter = ({ words, style }: ITypeWriter) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <H4 style={style}>
      <span>{text}</span>
      <Cursor cursorColor="#b91c1c" />
    </H4>
  );
};
