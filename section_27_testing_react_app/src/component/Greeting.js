import {useState} from "react";

export const Greeting = () => {

  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h1>Hello world!</h1>
      {!changedText && <p1>It's good to see you!</p1>}
      {changedText && <p1>Changed!</p1>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  )

}