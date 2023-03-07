import * as s from "./styles";

interface ICard {
  children: any;
}

export function Card({ children }: ICard) {
  return <s.Background>{children}</s.Background>;
}
