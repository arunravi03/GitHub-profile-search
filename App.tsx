import { Profiler, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./Component/SearchBox/SearchBox";
import Card from "./Component/Card/Card";
import MovieList from "./Component/MovieSearch/MovieList/MovieList";
import Title from "./Component/UseCallback/Title";
import ParentComponent from "./Component/UseCallback/ParentComponent";

function App() {
  const name = "Let's get started with React";

  return (
    <div>
      {/* <ParentComponent/> */}
      {/* <MovieList /> */}
      <SearchBox/>
      
      {/* <Card repo="Repo" rname="name" link="link"/> */}
      {/* <Card img="https://media.istockphoto.com/photos/canvas-art-background-white-total-linen-texture-cotton-pattern-picture-id1277594462?b=1&k=20&m=1277594462&s=170667a&w=0&h=qTvOztHgihy2sffsxYbEDtLnCUcJomMeLd9SWRFKik8="/> */}
    </div>
  );
}

export default App;
