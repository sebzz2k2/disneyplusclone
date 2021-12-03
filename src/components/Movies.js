import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4 className=" font-semibold my-4 ">Recomended for you</h4>
      <Content className="grid gap-6 grid-cols-4 mb-10">
        <Wrap>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KlJSFQDNR1D4fIJkOpUgbQHaEK%26pid%3DApi&f=1"
            alt="poster-1"
          />
        </Wrap>

        <Wrap>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1HVj26O3B4mIBr_NBc2e8gHaEK%26pid%3DApi&f=1"
            alt="poster-2"
          />
        </Wrap>

        <Wrap>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ji5kxvnJFdQvGmmDj8ZYNgHaEK%26pid%3DApi&f=1"
            alt="poster-3"
          />
        </Wrap>

        <Wrap>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8o8uGue2tDTEvKB9aYqVpwHaEK%26pid%3DApi&f=1"
            alt="poster-4"
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div``;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  s img {
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgba(0 0 0 /80%) 0px 40px 58px -10px,
      rgb(0 0 0 /73%) 0px 30px 22px -10px;
  }
`;
