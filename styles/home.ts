import styled from "styled-components";

export const Main = styled.main`
  background-image: url("/images/background-poke.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 2rem;
  padding-top: 2rem;

  .title {
    color: #e33d33;
    text-align: center;
  }

  .title--color {
    color: #fff;
  }
`;

export const PokemonContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  list-style: none;
  padding-bottom: 2rem;
`;
