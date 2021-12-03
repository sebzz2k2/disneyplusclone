import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container className="mt-7 py-4 ">
      <Wrap className="border-4 border-gray-400 rounded-xl hover:border-gray-100 cursor-pointer ">
        <img
          src="/images/viewers-disney.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </Wrap>

      <Wrap className="border-4 border-gray-400 rounded-xl hover:border-gray-100 cursor-pointer ">
        <img
          src="/images/viewers-marvel.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </Wrap>

      <Wrap className="border-4 border-gray-400 rounded-xl hover:border-gray-100 cursor-pointer ">
        <img
          src="/images/viewers-national.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </Wrap>

      <Wrap className="border-4 border-gray-400 rounded-xl hover:border-gray-100 cursor-pointer ">
        <img
          src="/images/viewers-pixar.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </Wrap>

      <Wrap className="border-4 border-gray-400 rounded-xl hover:border-gray-100 cursor-pointer ">
        <img
          src="/images/viewers-starwars.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
`;
const Wrap = styled.div`
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
`;
