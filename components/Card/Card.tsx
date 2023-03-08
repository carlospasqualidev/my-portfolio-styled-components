import * as s from "./styles";

interface ICard {
  children: any;

  width?: string;
  height?: string;
}

export function Card({ children, height, width }: ICard) {
  return (
    <s.Background height={height} width={width}>
      {" "}
      {children}
    </s.Background>
  );
}
