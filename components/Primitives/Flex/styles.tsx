import styled, { css, CSSProperties } from "styled-components";

export const FlexContainer = styled.div<{
  debbuger?: boolean;
  center?: boolean;
  row?: boolean;
  borderRounded?: boolean;
  borderFull?: boolean;
  justify?: string;
  align?: string;
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}

    ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `}

    ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

    ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

    ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `}

    ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}

    ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

    ${({ borderRounded }) =>
    borderRounded &&
    css`
      border-radius: ${({ theme: { sz } }) => sz.sm};
    `}
    
    ${({ borderFull }) =>
    borderFull &&
    css`
      border-radius: 100%;
    `}


    ${({ debbuger }) =>
    debbuger &&
    css`
      border: 1px solid greenyellow;
    `}
`;
