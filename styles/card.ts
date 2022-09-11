import styled, { keyframes } from "styled-components";

const borderRotate = keyframes`
    0% {
       transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
`;

export const ContainCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  min-width: 23%;

  padding: 2rem 1rem;

  border-radius: 1rem;
  border: 3px solid transparent;

  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);

  background-color: #333;

  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    background-image: conic-gradient(#e33d33 20deg, transparent 120deg);
    width: 200%;
    height: 200%;
    position: absolute;
    z-index: -10;
    animation: ${borderRotate} 3s linear infinite;
  }

  &::after {
    content: "";

    width: 96%;
    height: 96%;

    background-color: #222;

    z-index: -1;

    position: absolute;

    border-radius: 0.625rem;
    box-shadow: inset 20px 20px 20px #0000008c;
  }

  .pokemon__id {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #e33d33;
    color: #fff;

    border-radius: 5px;
    padding: 5px;
  }

  .pokemon__title {
    text-transform: capitalize;
    font-size: 1.4rem;

    color: #fff;
  }

  .button {
    text-decoration: none;

    background-color: #fff;
    color: #333;

    padding: 0.75rem 1.25rem;
    border-radius: 5px;

    font-weight: bold;

    transition: all 0.5s linear;
  }

  .button:hover {
    background-color: #e33d33;
    color: #fff;
  }
`;
