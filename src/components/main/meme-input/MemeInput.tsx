export default () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between gap-5 flex-wrap text-text-100">
                <div className="grow min-w-2xs">
                    <label htmlFor="top-text">Top text</label>
                    <input className="text-input" type="text" id="top-text" name="topText" placeholder="Shut up" />
                </div>
                <div className="grow min-w-2xs">
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input className="text-input" type="text" id="bottom-text" name="bottomText" placeholder="And take my money" />
                </div>
            </div>
            <button className="gradient block p-5 text-text-400 w-full
            rounded-md"><b>Get a new meme image 🖼️</b></button>
        </div>
    )
}