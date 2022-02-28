import { Container } from "./styles";

export const Modal = ({ success, setSuccess }: any) => {
  return (
    <>
      {success === "error" ? (
        <Container>
          <div>
            <h1 onClick={() => setSuccess("")}>X</h1>
            <h2>
              Houve um erro na criação da sua conta... Entre com seus dados
              pessoais.
            </h2>
          </div>
        </Container>
      ) : success === "ok" ? (
        <Container>
          <div>
            <h1 onClick={() => setSuccess("")}>X</h1>
            <h2>Parabéns! Você criou sua conta!</h2>
          </div>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
