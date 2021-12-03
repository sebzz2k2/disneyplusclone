import React from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";

function Home() {
  return (
    <main className=" px-14 py-0 overflow-hidden">
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;
