import styled, { CSSProperties } from "styled-components";

//TODO revisar line weight

export const H1 = styled.h1<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 78px;
  ${({ style }) => style && `${style}`}
`;
export const H2 = styled.h2<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  ${({ style }) => style && `${style}`}
`;
export const H3 = styled.h3<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  ${({ style }) => style && `${style}`}
`;
export const H4 = styled.h4<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  ${({ style }) => style && `${style}`}
`;
export const H5 = styled.h5<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  ${({ style }) => style && `${style}`}
`;
export const H6 = styled.h6<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  ${({ style }) => style && `${style}`}
`;
export const Subtitle = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  ${({ style }) => style && `${style}`}
`;

export const SubtitleBold = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  ${({ style }) => style && `${style}`}
`;

export const P = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  ${({ style }) => style && `${style}`}
`;
export const P2 = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  ${({ style }) => style && `${style}`}
`;

export const LabelLg = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  ${({ style }) => style && `${style}`}
`;
export const LabelMd = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  ${({ style }) => style && `${style}`}
`;
export const LabelSm = styled.p<{ style: CSSProperties }>`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  ${({ style }) => style && `${style}`}
`;
