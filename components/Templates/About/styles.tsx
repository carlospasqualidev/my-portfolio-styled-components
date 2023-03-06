import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  padding-top: ${({ theme: { sz } }) => sz.xlg3};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { sz } }) => sz.md};
`;

export const Container = styled.div`
  width: 100%;
`;
