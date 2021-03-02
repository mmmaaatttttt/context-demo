import { useContext } from "react";
import { DirectionContext } from "./contexts";
import { formatText } from "./utils";

const headingText = "Hello world";
const bodyText = "Here are some more words. They are very good words.";

function Words() {
  const { reversed } = useContext(DirectionContext);
  return (
    <div>
      <h1>{formatText(headingText, reversed)}</h1>
      <p>{formatText(bodyText, reversed)}</p>
    </div>
  );
}

export default Words;
