import { CSSProperties } from "styled-components";
import * as s from "./styles";

interface ITypography {
  children: any;
  style?: CSSProperties;
}

export function H1({ children, style }: ITypography) {
  return <s.H1 style={style}>{children}</s.H1>;
}
export function H2({ children, style }: ITypography) {
  return <s.H2 style={style}>{children}</s.H2>;
}
export function H3({ children, style }: ITypography) {
  return <s.H3 style={style}>{children}</s.H3>;
}
export function H4({ children, style }: ITypography) {
  return <s.H4 style={style}>{children}</s.H4>;
}
export function H5({ children, style }: ITypography) {
  return <s.H5 style={style}>{children}</s.H5>;
}
export function H6({ children, style }: ITypography) {
  return <s.H6 style={style}>{children}</s.H6>;
}

export function P({ children, style }: ITypography) {
  return <s.P style={style}>{children}</s.P>;
}
export function P2({ children, style }: ITypography) {
  return <s.P2 style={style}>{children}</s.P2>;
}
export function Subtitle({ children, style }: ITypography) {
  return <s.Subtitle style={style}>{children}</s.Subtitle>;
}
export function SubtitleBold({ children, style }: ITypography) {
  return <s.SubtitleBold style={style}>{children}</s.SubtitleBold>;
}
export function LabelLg({ children, style }: ITypography) {
  return <s.LabelLg style={style}>{children}</s.LabelLg>;
}
export function LabelMd({ children, style }: ITypography) {
  return <s.LabelMd style={style}>{children}</s.LabelMd>;
}
export function LabelSm({ children, style }: ITypography) {
  return <s.LabelSm style={style}>{children}</s.LabelSm>;
}
