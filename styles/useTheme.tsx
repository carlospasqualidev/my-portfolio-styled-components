import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  return themeContext;
}
