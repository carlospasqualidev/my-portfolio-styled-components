import styled, { css } from "styled-components";

export const Circle = styled.div<{
  borderColor: string;
  secondaryBorderColor?: string;
  borderSize: number;
  animPulse?: boolean;
  animChangeColors?: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  border: 1px solid ${({ borderColor }) => borderColor};

  width: ${({ borderSize }) => `${borderSize}px`};
  height: ${({ borderSize }) => `${borderSize}px`};

  @media (${({ theme: { sc } }) => sc.lg}) {
    width: ${({ borderSize }) => `${borderSize - 200}px`};
    height: ${({ borderSize }) => `${borderSize - 200}px`};
  }

  ${({ animPulse }) =>
    animPulse &&
    css`
      @media (${({ theme: { sc } }) => sc.lg}) {
        display: none;
      }
      animation: pulse 1.2s ease-in-out infinite;
    `}

  @keyframes pulse {
    0% {
      opacity: 0%;
    }

    10% {
      opacity: 100%;
    }

    50% {
      width: ${({ borderSize }) => `${borderSize + 100}px`};
      height: ${({ borderSize }) => `${borderSize + 100}px`};
    }

    75% {
      width: ${({ borderSize }) => `${borderSize + 100}px`};
      height: ${({ borderSize }) => `${borderSize + 100}px`};
      opacity: 0%;
    }

    100% {
      opacity: 0%;
    }
  }

  ${({ animChangeColors }) =>
    animChangeColors &&
    css`
      animation: changeColors 2s ease-in-out infinite;
    `}

  @keyframes changeColors {
    0% {
      border: 1px solid ${({ borderColor }) => borderColor};
    }

    25% {
      border: 1px solid ${({ theme: { cl } }) => cl.gray};
    }

    50% {
      border: 1px solid ${({ theme: { cl } }) => cl.gray};
    }

    100% {
      border: 1px solid ${({ borderColor }) => borderColor};
    }
  }
`;
