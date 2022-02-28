import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  opacity: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 50%;
    height: 50%;
    z-index: 3;
    background-color: var(--gray);
    opacity: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;

    h1 {
      font-size: 24;
      opacity: 50%;
      position: absolute;
      top: 180px;
      right: 400px;

      :hover {
        cursor: pointer;
        opacity: 100%;
        filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 15px);
      }
    }

    h2 {
      width: 60%;
      text-align: center;
      margin: 0;
    }
  }
`;
