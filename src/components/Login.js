import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container className="relative flex items-center justify-center">
      <CTA className=" w-9/12 flex flex-col items-center">
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp className="w-full font-bold  py-4 px-0 rounded text-center text-lg cursor-pointer tracking-wide mt-2 mb-3">
          GET ALL THERE
        </SignUp>
        <Descreption className="text-xs text-center tracking-wide leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          porro quidem nihil dignissimos nemo labore autem repudiandae
          consectetur totam explicabo quis magni neque similique placeat ea ex
          dolor quia esse rem, doloribus asperiores provident? Temporibus totam,
          sed dolorem eligendi doloremque eum neque aliquam quasi! A iure quas
          minima iusto itaque?
        </Descreption>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`text
  max-width: 650px;
  padding: 80px 40px;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img``;
const SignUp = styled.a`
  background-color: #0063e5;
  color: #f9f9f9;
  transition: all 250ms;

  &:hover {
    background-color: #0483ee;
  }
`;

const Descreption = styled.p`
  width: 90%;
`;
