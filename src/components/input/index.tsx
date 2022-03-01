import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";
import axios from "axios";

export const Input = ({
  setIsCepError,
  setUserData,
  isCepError,
  name,
  label,
  placeholder,
  ...rest
}: any) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const verifyCep = (ev: any) => {
    if (name === "zipCode") {
      if (ev._reactName === "onFocus") {
        setIsCepError(false);
      } else {
        const cep: string = ev.target.value;

        if (cep.length !== 8) {
          setIsCepError(true);
        } else {
          axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
              if (res.data?.erro === true) {
                setIsCepError(true);
              } else {
                setUserData({
                  address: {
                    city: res.data.localidade,
                    state: res.data.uf,
                    publicPlace: res.data.logradouro,
                    district: res.data.bairro,
                    complement: res.data.complemento,
                  },
                });

                setIsCepError(false);
              }
            })
            .catch((error) => setIsCepError(true));
        }
      }
    }
  };

  return (
    <Container>
      <span>{label}</span>
      <input
        onBlur={verifyCep}
        onFocus={verifyCep}
        ref={inputRef}
        isErrored={!!error}
        placeholder={placeholder}
        // placeholder={!error ? placeholder : error}
        // value={!error ? defaultValue : ""}
        {...rest}
      />
      {name === "zipCode" && isCepError ? (
        <span className="classsError">CEP é inválido!</span>
      ) : (
        <span className="classsError">{error}</span>
      )}
    </Container>
  );
};
