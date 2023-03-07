import styled, { CSSProperties } from "styled-components";

export const LetterContainer = styled.div`
  display: flex;
`;

export const Letters = styled.div<{ style: CSSProperties }>`
  color: ${({ theme: { cl } }) => cl.white};
  text-transform: uppercase;
  opacity: 50%;

  transition: 1.2s;
  :hover {
    animation-name: initial;
    animation-play-state: running;
    transition: 0.2s;
    cursor: default;
    opacity: 100%;
  }
  animation: jello 1.2s both;
  @keyframes jello {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  ${({ style }) => style && `${style}`}
`;
