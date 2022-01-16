/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef } from "react";

import Link from "next/link";

import {
  Box,
  Button,
  CheckboxArea,
  Container,
  Content,
  Flex,
  InputBox,
} from "@/../styles/globalComponents";
import animationData from "@/animations/animationHome.json";
import { lottie } from "@/animations/Lottie";
import { SEO } from "@/SEO";

export default function Home() {
  const containerRef = useRef<Element | any>();

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      animationData,
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <>
      <SEO title="Teste" />
      <Container>
        <section>
          <Flex height="100vh">
            <Box padding="5rem">
              <h4>Peças Vale</h4>
              <Content padding="7rem 0">
                <h3>
                  Aqui você tem valores das peças de muitos dos fornecedores do
                  Vale do Aço!
                </h3>
                <p color="#00000099">Logue-se em sua conta!</p>
                <InputBox margin="2rem 0 0 0" padding="1rem">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Insira aqui o seu e-mail"
                    autoComplete="off"
                  />
                </InputBox>
                <InputBox margin="0" padding="1rem">
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Insira aqui a sua senha"
                    autoComplete="off"
                  />
                </InputBox>
                <CheckboxArea padding="1.5rem">
                  <div>
                    <input id="checkbox" type="checkbox" />
                    <label htmlFor="checkbox"> Mantenha-me conectado</label>
                  </div>
                  <Link href="./forgot">
                    <p>Esqueci minha senha</p>
                  </Link>
                </CheckboxArea>
                <Button isRounded={false}>Login</Button>
                <Button isRounded>Solicitar acesso</Button>
                <div className="separator" />
                <hr />
                <div className="separator" />
                <p>
                  Desenvolvido por{" "}
                  <a href="https://www.linkedin.com/in/mfilype/">
                    Matheus Filype
                  </a>
                </p>
              </Content>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              background="#E5E5E569"
              padding="5rem"
            >
              <div
                style={{ width: "60%" }}
                className="container"
                ref={containerRef}
              />
            </Box>
          </Flex>
        </section>
      </Container>
    </>
  );
}
