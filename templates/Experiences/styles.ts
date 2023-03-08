import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  padding-top: ${({ theme: { sz } }) => sz.xlg3};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-inline-start: 80px;
    list-style: square;
  }
`;
