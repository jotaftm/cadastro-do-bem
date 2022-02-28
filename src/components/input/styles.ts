import styled, { css } from "styled-components";

type PropTypes = {
  isErrored: boolean;
};

export const Container = styled.div.attrs((props: PropTypes) => ({
  isErrored: props.isErrored,
}))<PropTypes>`
  width: 216px;
  height: 56px;
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    font-size: 14px;
    line-height: 16px;
    margin: 2px 0px;
  }

  input {
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 11.8815px;
    padding: 10px;
    font-weight: bold;
    border: ${(props) =>
      props.isErrored ? "2px solid var(--red)" : "1px solid var(--gray)"};

    ::placeholder {
      opacity: 30%;
      font-weight: normal;
    }
  }

  .classsError {
    font-size: 10px;
    margin: 2px 0 0 10px;
    color: var(--red);
  }
`;
