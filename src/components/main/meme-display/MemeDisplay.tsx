import exampleImageUrl from "/src/assets/example-img.png"

export default () => {
    return(
        <div className="relative my-10">
            <span className="absolute top-10 left-0 right-0 text-center meme-text">Shut up</span>
            <span className="absolute bottom-10 left-0 right-0 text-center meme-text">And take my money</span>
            <img className="w-full rounded-2xl shadow-2xl" src={exampleImageUrl} alt="An animation character holding a handfull of dollars" />
        </div>
    )
}