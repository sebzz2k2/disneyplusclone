import React from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <main className=" px-14 py-0 overflow-hidden">
      <ImageSlider />
      <Viewers />
    </main>
  );
}

export default Home;
