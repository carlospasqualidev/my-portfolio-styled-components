import { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";
import { P } from "../Typography";

import * as s from "./styles";

const data = [
  {
    label: "Hero",
    href: "#hero",
  },
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Experiências",
    href: "#experiences",
  },
  {
    label: "Habilidades",
    href: "#skills",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
];

export const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const [urlHash, setUrlHash] = useState("#home");

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((prevState) => !prevState);
  };

  return (
    <s.Background mobileMenuIsOpen={mobileMenuIsOpen}>
      <button
        onClick={() => {
          toggleMobileMenu();
        }}
      >
        {mobileMenuIsOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <s.Ul mobileMenuIsOpen={mobileMenuIsOpen}>
        {data.map((data) => (
          <s.Li
            selected={data.href === urlHash}
            onClick={() => setUrlHash(data.href)}
            key={data.href}
          >
            <a href={data.href}>{data.label}</a>
          </s.Li>
        ))}
      </s.Ul>
    </s.Background>
  );
};
