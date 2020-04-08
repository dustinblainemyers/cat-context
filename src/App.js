import React, {useReducer} from 'react';
import {StateProvider} from "./context";
import DemoComponent from "./components/DemoComponent"

function App() {
  
  const initialState = {

    name: "Catty",
  };

  const reducer = (state, action) => {
    const {name} = action;
    switch (action.type) {  ///where is action type coming from here ?
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      default:
        return state;
    }
  }
  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
      <h1>Hello World</h1>
      </StateProvider>
    </div>
  );
}

export default App;









