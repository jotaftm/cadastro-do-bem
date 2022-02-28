import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 504px;
  height: 568px;
  left: 803.2px;
  top: 79.11px;
  background: var(--white);
  box-shadow: 0px 24px 36px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  z-index: 1;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 95%;
    height: 48px;
    background: var(--blue);
    border: none;
    border-radius: 16px;
    margin: 20px;
    opacity: 90%;
    font-size: 16px;
    line-height: 16px;
    color: var(--white);

    :hover {
      opacity: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 15px);
    }
  }
`;
