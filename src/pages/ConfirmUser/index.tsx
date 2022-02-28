import LoadingImg from "../../assets/loading.svg";
import { Container, FullContainer } from "./styles";
import { useParams } from "react-router-dom";
import { apiCadDoBem } from "../../services/api";
import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";

export const ConfirmUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params: any = useParams();

  useEffect(() => {
    apiCadDoBem
      .patch(`/users/${params.userId}`, {
        confirmed: true,
      })
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [params.userId]);

  return (
    <Container>
      {isLoading ? (
        <img src={LoadingImg} alt="Loading" />
      ) : (
        <FullContainer>
          <a
            href="https://www.bemol.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Logo} alt="Logo Bemol" className="logoBemol" />
          </a>

          <h1>Conta confirmada com sucesso!</h1>
        </FullContainer>
      )}
    </Container>
  );
};
