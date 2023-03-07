import styled, { css } from "styled-components";
// TODO ARRUMAR SIDEBAR NO RESPONSIVO, AO CLICAR EM OUTRA TELA A SIDEBAR FICA PARADA
export const Background = styled.header<{ mobileMenuIsOpen: boolean }>`
  background-color: ${({ theme: { cl, tp } }) => cl.primary + tp.t80};
  display: flex;
  min-height: ${({ theme: { sz } }) => sz.xlg3};
  justify-content: center;
  align-items: center;
  transition: 200ms ease-in;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  button {
    display: none;
  }

  @media (${({ theme: { sc } }) => sc.lg}) {
    height: ${({ theme }) => theme.sz.xlg3};
    align-items: start;
    justify-content: end;
    width: 100vw;

    button {
      padding: ${({ theme }) => theme.sz.xsm};
      align-items: center;
      justify-content: center;
      display: flex;
      z-index: 20;
      align-items: center;
      justify-content: center;
      margin: 12px;
    }

    ${({ mobileMenuIsOpen }) =>
      mobileMenuIsOpen &&
      css`
        height: 100vh;
      `}
  }
`;

export const Ul = styled.ul<{ mobileMenuIsOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { sz } }) => sz.xlg2};

  @media (${({ theme: { sc } }) => sc.lg}) {
    top: 0;
    position: absolute;
    flex-direction: column;
    height: 100%;
    width: 100%;

    ${({ mobileMenuIsOpen }) =>
      !mobileMenuIsOpen &&
      css`
        top: -210px;
      `}
  }
`;

export const Li = styled.li<{ selected: boolean }>`
  ${({ theme: { tx } }) => tx.xsm}
  text-transform: uppercase;
  letter-spacing: ${({ theme: { sz } }) => sz.xsm};
  color: ${({ theme: { cl } }) => cl.white};

  transition: 200ms ease-in;

  ${({ selected, theme: { an } }) =>
    selected
      ? css`
          transform: scale(1.2);
        `
      : css`
          opacity: 50%;
          ${an.smHoverScale}
          :hover {
            opacity: 100%;
          }
        `}
`;
