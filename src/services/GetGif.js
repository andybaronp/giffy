
import FetchData from "./FetchData.js";
export default function getGif({ id } = {}){
    const URL = `:BASE_URL/gifs/${id}`;
    return FetchData({URL}).then(({data}) => {
      const gifs = data.map( gif => {
      const { id, title } = gif;
      const url = gif.images.downsized_medium.url;
      return { id, url, title };
      })
      return gifs;
    })
}

