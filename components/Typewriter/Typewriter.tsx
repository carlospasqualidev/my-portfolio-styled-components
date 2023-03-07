import { Cursor, useTypewriter } from "react-simple-typewriter";
import { CSSProperties } from "styled-components";

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
    <h3 style={style}>
      <span>{text}</span>
      <Cursor cursorColor="#b91c1c" />
    </h3>
  );
};
