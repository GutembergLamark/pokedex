import Image from "next/image";

import { ContainAbout } from "../styles/about";

export default function About() {
  return (
    <ContainAbout>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia, non
        dolorum quisquam cupiditate dicta laborum voluptate, tempore incidunt
        repudiandae iusto odit alias at ipsam possimus fugit fuga doloribus
        saepe.
      </p>
      <Image
        src="/images/charizard.png"
        width="300px"
        height="300px"
        alt="charizard"
      />
    </ContainAbout>
  );
}
