export default () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-wrap justify-between gap-5 text-light-100">
                <div className="grow min-w-2xs">
                    <label htmlFor="top-text">Top text</label>
                    <input className="text-input" type="text" id="top-text" name="topText" placeholder="Shut up" />
                </div>
                <div className="grow min-w-2xs">
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input className="text-input" type="text" id="bottom-text" name="bottomText" placeholder="And take my money" />
                </div>
            </div>
            <button className="block w-full p-5 rounded-md gradient text-light-400"><b>Get a new meme image 🖼️</b></button>
        </div>
    )
}