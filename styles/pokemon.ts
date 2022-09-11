import styled from "styled-components";

export const Main = styled.main`
  text-align: center;

  background-image: url("/images/background.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  min-height: 100vh;
  height: 100%;

  padding: 2rem;

  .pokemon__name {
    text-transform: capitalize;
    font-size: 2rem;

    background-color: #333;
    color: #fff;

    padding: 0.5rem;
    margin: 0.8rem auto;

    width: max-content;
  }

  .container {
    color: #fff;
  }

  .title {
    margin: 0.625rem auto;
    font-size: 1.25rem;
  }

  .types {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }

  .type--pokemon {
    padding: 0.625rem 1rem;
    color: #fff;
    background-color: #000;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .type__normal {
    background-color: #aa9;
  }

  .type__fire {
    background-color: #f42;
  }

  .type__water {
    background-color: #39f;
  }

  .type__eletric {
    background-color: #fc3;
  }

  .type__grass {
    background-color: #7c5;
  }

  .type__ice {
    background-color: #6cf;
  }

  .type__fighting {
    background-color: #b54;
  }

  .type__poison {
    background-color: #a59;
  }

  .type__ground {
    background-color: #db5;
  }

  .type__flying {
    background-color: #89f;
  }

  .type__psychic {
    background-color: #f59;
  }

  .type__bug {
    background-color: #ab2;
  }

  .type__rock {
    background-color: #ba6;
  }

  .type__ghost {
    background-color: #66b;
  }

  .type__dragon {
    background-color: #76e;
  }

  .type__dark {
    background-color: #754;
  }

  .type__steel {
    background-color: #aab;
  }

  .type__fairy {
    background-color: #e9e;
  }

  .container__info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .info {
    margin: 1rem 0;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;

    color: #fff;
  }
`;
