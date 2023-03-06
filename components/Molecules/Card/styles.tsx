import styled, { css } from "styled-components";

export const Background = styled.div`
  padding: ${({ theme: { sz } }) => sz.sm};
  background-color: ${({ theme: { cl, tp } }) => cl.primary + tp.t80};
  border-radius: ${({ theme: { sz } }) => sz.sm};

  ${({ theme: { an } }) => an.xsHoverScale}
`;
