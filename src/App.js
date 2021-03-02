import { useReducer } from "react";
import { DirectionContext, DispatchContext } from "./contexts";
import reducer from "./reducer";

const initialState = {
  reversed: false
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DirectionContext.Provider value={{ reversed: state.reversed }}>
      <DispatchContext.Provider value={{ dispatch }}>
        <main>
          <Buttons/>
          <Words/>
        </main>
      </DispatchContext.Provider>
    </DirectionContext.Provider>
  );
}

export default App;
