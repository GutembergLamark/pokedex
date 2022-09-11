import Image from "next/image";
import Link from "next/link";
import { IPokemon } from "../pages/index";
import { ContainCard } from "../styles/card";

interface IPokemonProps {
  pokemon: IPokemon;
}

export default function Card({ pokemon }: IPokemonProps) {
  return (
    <ContainCard>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120px"
        height="120px"
        alt={pokemon.name}
      />
      <p className="pokemon__id">#{pokemon.id}</p>
      <h3 className="pokemon__title">{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className="button">Detalhes</a>
      </Link>
    </ContainCard>
  );
}
