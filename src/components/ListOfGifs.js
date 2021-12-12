import Gif from "./Gif";
import getGifs from "../services/getGifs";
import { useState, useEffect } from "react";
import {Route} from "wouter";
import GifDescription from "./GifDescription";
const ListOfGifs = ({params }) => {
  const { keyword } = params;
  const [gifs, updateGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((data) => updateGifs(data));
  }, [keyword]);
  return (
    <>
      {gifs.map(({ id, url, title }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
      <Route component={GifDescription} path="/description/:id" />
    </>
  );
}
 
export default ListOfGifs;