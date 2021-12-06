import React from "react";
import styled from "styled-components";
import Viewers from "./Viewers";

function Detail() {
  return (
    <div>
      <Container className="h-full px-14 relative">
        <Background className="fixed top-0 left-0 bottom-0 right-0  opacity-70">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42B7485D1DF3A1595468356C7B3209FE060BE89AE47787C6D5A9C798D0A65C0E/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
            className=" w-full h-full object-cover"
          />
        </Background>
        <ImageTitle className="">
          <img
            src="/images/viewers-starwars.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </ImageTitle>
        <Controls className="flex items-center">
          <PlayButton className="rounded text-base flex items-center h-14 text-black px-6 py-0 mr-5">
            <img src="/images/play-icon-black.png" alt="" className=" " />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton className="rounded text-base flex items-center h-14  px-6 py-0 mr-5 border-2 border-white">
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton className="w-11 h-11 flex items-center justify-center border-2 border-white mr-4">
            <span className="text-3xl">+</span>
          </AddButton>
          <GroupWatchButton className="w-11 h-11 flex items-center justify-center border-2 border-white bg-black">
            <img src="/images/group-icon.png" alt="" />
          </GroupWatchButton>
        </Controls>
        <SubTitle className="mt-6">Lorem ipsum, dolor sit amet</SubTitle>
        <Description className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          natus repellendus, beatae alias iusto porro delectus neque adipisci,
          repudiandae ullam eum dolor? Iure, reprehenderit ducimus.
        </Description>
      </Container>
    </div>
  );
}

export default Detail;

const Container = styled.div``;
const Background = styled.div`
  z-index: -1;
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
`;

const Controls = styled.div``;
const PlayButton = styled.button`
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(130, 130, 130, 0.5);
  }
`;
const AddButton = styled.button`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const GroupWatchButton = styled(AddButton)``;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
`;
const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20px;
  max-width: 760px;
`;
