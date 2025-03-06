import { MemeData } from "../../scripts/types";
import MemeDisplay from "./meme-display/MemeDisplay";
import MemeInput from "./meme-input/MemeInput";
import React, { useState } from "react";

export default () => {
  const [memeData, setMemeData] = useState<MemeData>({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR",
  });

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
        />
        <MemeDisplay data={memeData} />
      </div>
    </main>
  );
};
