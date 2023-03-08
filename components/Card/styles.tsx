import styled, { css } from "styled-components";

export const Background = styled.div<{ width: string; height: string }>`
  padding: ${({ theme: { sz } }) => sz.sm};
  background-color: ${({ theme: { cl, tp } }) => cl.primary + tp.t80};
  border-radius: ${({ theme: { sz } }) => sz.sm};

  ${({ theme: { an } }) => an.xsHoverScale}

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
`;
