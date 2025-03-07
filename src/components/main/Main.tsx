import { MemeData } from "../../scripts/types";
import MemeDisplay from "./meme-display/MemeDisplay";
import MemeInput from "./meme-input/MemeInput";
import { useState, useEffect , useRef} from "react";

export default () => {
  const [memeData, setMemeData] = useState<MemeData>({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR",
  });

  const memeImages = useRef<string[]>([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => memeImages.current = data.data.memes.map((i: { url: string; }) => i.url))
  },[])

  function handleTopTextChanged(text: string) {
    setMemeData(prev => {return {...prev, topText: text}})
  }

  function handleBottomTextChanged(text: string) {
    setMemeData(prev => {return {...prev, bottomText: text}})

  }

  function handleNewImageRequested() {
    console.log("New image requested")
  }

  return (
    <main className="p-5">
      <div className="wrapper">
        <MemeInput
          onTopTextChanged={handleTopTextChanged}
          onBottomTextChanged={handleBottomTextChanged}
          onNewImageRequested={handleNewImageRequested}
          memeData={memeData}
        />
        <MemeDisplay data={memeData} />
      </div>
    </main>
  );
};
