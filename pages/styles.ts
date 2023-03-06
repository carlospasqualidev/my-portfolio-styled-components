import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  min-height: 100vh;
`;

export const Body = styled.div`
  padding: 0 ${({ theme: { sz } }) => sz.lg};
  height: 100%;
`;
