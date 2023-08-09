import {useState} from "react";
import {Output} from "./Output";

export const Greeting = () => {

  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h1>Hello world!</h1>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  )

}