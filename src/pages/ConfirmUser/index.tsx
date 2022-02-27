import LoadingImg from "../../assets/loading.svg";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { apiCadDoBem } from "../../services/api";
import { useEffect, useState } from "react";


export const ConfirmUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const params: any = useParams();

    useEffect(() => {
        apiCadDoBem
          .patch(`/users/${params.userId}`, {
              confirmed: true
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
                <>
                </>
            )}
        </Container>
    );
};