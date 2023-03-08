import * as s from "./styles";
interface IFlex {
  children: any;
  id?: string;

  debbuger?: boolean;
  center?: boolean;
  row?: boolean;
  borderRounded?: boolean;
  borderFull?: boolean;
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
  justify?: "center" | "flex-start" | "flex-end" | "space-between";
  align?: "center" | "flex-start" | "flex-end";
}

export function Flex({
  id,
  children,
  debbuger,
  center,
  row,
  gap,
  padding,
  borderRounded,
  borderFull,
  justify,
  align,
  width,
  height,
}: IFlex) {
  return (
    <s.FlexContainer
      id={id}
      debbuger={debbuger}
      center={center}
      row={row}
      gap={gap}
      padding={padding}
      borderRounded={borderRounded}
      borderFull={borderFull}
      justify={justify}
      align={align}
      width={width}
      height={height}
    >
      {children}
    </s.FlexContainer>
  );
}
