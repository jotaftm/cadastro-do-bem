import { Form } from "@unform/web";
import { Input } from "../input";
import { Container } from "./styles";
import { Scope } from "@unform/core";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { createUserSchema } from "../../schemas/createUserSchema";
import { apiCadDoBem } from "../../services/api";
import { Modal } from "../modal";

interface Address {
  zipCode: string;
  publicPlace: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface DataRegister {
  primaryName: string;
  lastName: string;
  email: string;
  cpf: string;
  birthDate: string;
  password: string;
  address: Address;
}

interface ErrorMessages {
  [key: string]: string;
}

export const FormComponent = () => {
  const [isCepError, setIsCepError] = useState(false);
  const [userData, setUserData] = useState({});
  const [success, setSuccess] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    if ("address" in userData) {
      (formRef as any).current.setData(userData);
    }
  }, [userData]);

  const createUser = (data: any) => {
    setSuccess("loading");
    apiCadDoBem
      .post("/users", data)
      .then((res) => {
        //TODO: usar os retornos
        setSuccess("ok");
      })
      .catch((error) => setSuccess("error"));
    //TODO: tratar os erros
  };

  const handleSubmit = async (data: DataRegister, { reset }: any) => {
    try {
      await createUserSchema.validate(data, {
        abortEarly: false,
      });

      data.birthDate = data.birthDate.replace(/-/g, "/");

      createUser(data);

      reset();

      return (formRef.current! as any).setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages: ErrorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path!] = error.message;
        });

        (formRef.current! as any).setErrors(errorMessages);
      }
    }
  };

  const formStyle = {
    width: "90%",
    margin: "auto",
  };

  return (
    <Container>
      <Modal success={success} setSuccess={setSuccess} />
      <Form ref={formRef} onSubmit={handleSubmit} style={formStyle}>
        <section>
          <Input name="primaryName" label="Nome *" placeholder="John" />
          <Input name="lastName" label="Sobrenome *" placeholder="Doe" />
        </section>
        <section>
          <Input name="email" label="Email *" placeholder="john@mail.com" />
          <Input name="cpf" label="CPF *" placeholder="123.456.789-00" />
        </section>
        <section>
          <Input name="password" label="Senha *" placeholder="Senhaforte9!" />
          <Input
            className="inputDate"
            name="birthDate"
            label="Data de nascimento *"
            type="date"
          />
        </section>
        <Scope path="address">
          <section>
            <Input
              id="zipCode"
              setIsCepError={setIsCepError}
              setUserData={setUserData}
              isCepError={isCepError}
              name="zipCode"
              label="CEP *"
              placeholder="12345678"
            />
            <Input name="city" label="Cidade *" placeholder="Manaus" />
          </section>
          <section>
            <Input
              name="publicPlace"
              label="Endereço *"
              placeholder="Rua da esquina, 300"
            />
            <Input name="district" label="Bairro *" placeholder="Centro" />
          </section>
          <section>
            <Input name="complement" label="Complemento" placeholder="Casa" />
            <Input name="state" label="Estado *" placeholder="AM" />
          </section>
        </Scope>
        <button type="submit" disabled={isCepError ? true : false}>
          Agora sou do bem!
        </button>
      </Form>
    </Container>
  );
};
