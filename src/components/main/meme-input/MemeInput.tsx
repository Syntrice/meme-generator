import { MemeData } from "../../../scripts/types";

interface MemeInputProps {
  onTopTextChanged: (text: string) => void;
  onBottomTextChanged: (text: string) => void;
  onNewImageRequested: () => void;
  memeData: MemeData
}

export default ({
  onTopTextChanged,
  onBottomTextChanged,
  onNewImageRequested,
  memeData
}: MemeInputProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-between gap-5 text-light-100">
        <div className="grow min-w-2xs">
          <label htmlFor="top-text">Top text</label>
          <input
            className="text-input"
            type="text"
            id="top-text"
            name="topText"
            value={memeData.topText}
            onChange={(e) => onTopTextChanged(e.currentTarget.value)}
          />
        </div>
        <div className="grow min-w-2xs">
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            className="text-input"
            type="text"
            id="bottom-text"
            name="bottomText"
            value={memeData.bottomText}
            onChange={(e) => onBottomTextChanged(e.currentTarget.value)}
          />
        </div>
      </div>
      <button
        className="block w-full p-5 rounded-md gradient hover:gradient-dark text-light-400"
        onClick={onNewImageRequested}
      >
        <b>Get a new meme image 🖼️</b>
      </button>
    </div>
  );
};
