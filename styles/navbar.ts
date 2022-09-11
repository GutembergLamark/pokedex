import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  background-color: #333;
  color: #fff;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    img {
      min-width: 25px;
      min-height: 25px;
    }
  }

  .link__itens {
    display: flex;
    list-style: none;
    margin: 1.25rem;
    gap: 1.25rem;
  }

  .link__itens a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
    border-bottom: 2px solid transparent;
    transition: all 0.5s linear;
  }

  .link__itens a:hover {
    border-color: #fff;
  }
`;
