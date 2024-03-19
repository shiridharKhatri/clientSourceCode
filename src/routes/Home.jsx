import React from "react";
import Header from "../components/Header";
import Foundation from "../components/Foundation";
import Cards from "../components/Cards";
import Ongoingproject from "../components/Ongoingproject";
import Latestnews from "../components/Latestnews";
import Project from "../components/Project";
import Video from "../components/Video";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Foundation />
      <Cards />
      <Ongoingproject />
      <Latestnews />
      <Project />
      <Video />
      <Gallery />
    </>
  );
}
