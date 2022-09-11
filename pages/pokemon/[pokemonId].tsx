import Image from "next/image";
import { api } from "../../services/api";
import { Main } from "../../styles/pokemon";

interface IPokemonContext {
  params: {
    pokemonId: string;
    name: string;
    url: string;
  };
}

interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface IPokemonUnic {
  name: string;
  id: number;
  types: IPokemonType[];
  weight: number;
  height: number;
}

interface IPokemonProps {
  pokemon: IPokemonUnic;
}

export const getStaticPaths = async () => {
  const response = await api.get("/", {
    params: {
      limit: 251,
    },
  });

  const paths = response.data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IPokemonContext) => {
  const id = context.params.pokemonId;

  const response = await api.get(`/${id}`);

  return {
    props: { pokemon: response.data },
  };
};

export default function Pokemon({ pokemon }: IPokemonProps) {
  console.log(pokemon);
  return (
    <Main>
      <h1 className="pokemon__name">{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200px"
        height="200px"
        alt={pokemon.name}
      />
      <div className="container container__id">
        <h3 className="title id__numero">Número:</h3>
        <p className="id--pokemon">#{pokemon.id}</p>
      </div>
      <div className="container container__type">
        <h3 className="title type__tipo">Tipo:</h3>
        <div className="types">
          {pokemon.types.map((item: IPokemonType, index) => {
            return (
              <span
                key={index}
                className={`type--pokemon type__${item.type.name}`}
              >
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="container__info">
        <div className="info info__height">
          <h4 className="height__name">Altura:</h4>
          <p className="height__num">{pokemon.height * 10} cm</p>
        </div>
        <div className="info info__weight">
          <h4 className="weight__name">Peso:</h4>
          <p className="weight__num">{pokemon.weight / 10} Kg</p>
        </div>
      </div>
    </Main>
  );
}
