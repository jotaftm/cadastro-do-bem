import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 689px;
  max-width: 1920px;
  max-height: 1080px;
  margin: auto;
`;

export const FullContainer = styled.div`
  /* border: 2px solid red; */

  width: 100%;
  height: 100%;
  max-width: 1660px;
  margin: auto;
  display: flex;
`;

export const SectionBem = styled.div`
  /* border: 2px solid blue; */

  width: 48%;
  margin-left: 5%;
  margin-top: 2%;

  h1 {
    width: 90%;
    margin: 48px 0;
    position: relative;
    z-index: 1;
  }

  .ornament {
    position: absolute;
    width: 57px;
    height: 62px;
    left: 50px;
    top: 160px;
  }

  .logoBemol {
    width: 200px;
  }

  .spanBlue {
    color: var(--blue);
  }

  .spanRed {
    color: var(--red);
  }
`;

export const SectionVideo = styled.a`
  display: flex;
  width: 40%;
  margin: 24px 0;

  img {
    width: 80px;
  }

  p {
    color: var(--red);
    margin-top: 18px;

    :hover {
      color: var(--black);
    }
  }
`;

export const SectionSocialNetworks = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;

  img {
    width: 32px;
    opacity: 50%;

    :hover {
      opacity: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 15px);
    }
  }
`;

export const SectionForm = styled.div`
  width: 52%;
  height: 100%;
  background-color: var(--blue);

  h2 {
    margin: 5% 0 0 10%;
  }
`;

export const BackgroundRed = styled.div`
  position: absolute;
  width: 300px;
  height: 80%;
  bottom: 0;
  right: 5%;
  background: var(--red);
  border-radius: 0px 16px 0px 0px;
`;
