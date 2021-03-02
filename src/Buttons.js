import { useContext } from "react";
import { DispatchContext } from "./contexts";
import { setBackward, setForward } from "./actionCreators";

function Buttons() {
  const { dispatch } = useContext(DispatchContext);
  return (
    <div>
      <button onClick={() => dispatch(setForward())}>Normal Text</button>
      <button onClick={() => dispatch(setBackward())}>Reversed Text</button>
    </div>
  );
}

export default Buttons;