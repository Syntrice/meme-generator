import { MemeData } from "../../scripts/types";
import MemeDisplay from "./meme-display/MemeDisplay"
import MemeInput from "./meme-input/MemeInput"
import React, { useState } from "react"

export default () => {
  const [memeData, setMemeData] = useState<MemeData>({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR"
    });


  return (
    <main className="p-5">
      <div className="wrapper">
        <MemeInput/>
        <MemeDisplay data={memeData}/>
      </div>
    </main>
  )
}