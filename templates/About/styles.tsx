import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  padding-top: ${({ theme: { sz } }) => sz.xlg3};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileImage = styled.div`
  display: none;
  @media (${({ theme: { sc } }) => sc.lg}) {
    display: block;
  }
`;

export const PcImage = styled.div`
  display: block;
  @media (${({ theme: { sc } }) => sc.lg}) {
    display: none;
  }

  ${({ theme: { an } }) => an.rotateToRight}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { sz } }) => sz.md};
  @media (${({ theme: { sc } }) => sc.lg}) {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  P {
    text-align: center;
  }
`;
