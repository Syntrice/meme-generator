import { MemeData } from "../../../scripts/types"

interface MemeDisplayProps {
    data: MemeData
}

export default ({ data }: MemeDisplayProps) => {
    return(
        <div className="relative my-10">
            <span className="absolute left-0 right-0 text-center top-10 meme-text">{data.topText}</span>
            <span className="absolute left-0 right-0 text-center bottom-10 meme-text">{data.bottomText}</span>
            <img className="w-full shadow-2xl rounded-2xl" src={data.imageUrl} alt="An animation character holding a handfull of dollars" />
        </div>
    )
}