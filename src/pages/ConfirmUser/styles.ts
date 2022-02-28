import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 689px;
  max-width: 1920px;
  max-height: 1080px;
  margin: auto;
  background-color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullContainer = styled.div`
  width: 100%;
  height: 400px;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
