import Image from "next/image";
import Link from "next/link";
import { NavBar } from "../styles/navbar";

export default function Navbar() {
  return (
    <NavBar>
      <div className={"logo"}>
        <Image
          src="/images/pokeball.png"
          width="30px"
          height="30px"
          alt="pokenext"
        />
        <h1>PokeDex</h1>
      </div>
      <ul className={"link__itens"}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </NavBar>
  );
}
