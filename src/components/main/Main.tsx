import MemeDisplay from "./meme-display/MemeDisplay"
import MemeInput from "./meme-input/MemeInput"

export default () => {
  return (
    <main className="p-5">
      <div className="wrapper">
        <MemeInput/>
        <MemeDisplay/>
      </div>
    </main>
  )
}