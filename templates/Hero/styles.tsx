import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PcContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${({ theme: { sc } }) => sc.lg}) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  @media (${({ theme: { sc } }) => sc.lg}) {
    display: flex;
  }
`;
