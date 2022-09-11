import Image from "next/image";
import React from "react";
import { api } from "../services/api";
import { Header, PokemonContainer } from "../styles/home";
import Card from "../components/Card";

export interface IPokemon {
  id: number;
  name: string;
  url: string;
}

export async function getStaticProps() {
  const response = await api.get("/", {
    params: {
      limit: 251,
    },
  });

  response.data.results.forEach((item: IPokemon, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: response.data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Header>
        <h1 className="title">
          Poke<span className="title--color">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50px"
          height="50px"
          alt="Pokenext"
        />
      </Header>
      <PokemonContainer className="pokemon__container">
        {pokemons.map((pokemon: IPokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
      </PokemonContainer>
    </>
  );
}
