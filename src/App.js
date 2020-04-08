import React, {useReducer} from 'react';
import {StateProvider} from "./context";

function App() {

  return (
    <div className="App">
      <StateProvider>
      <h1>Hello World</h1>
      </StateProvider>
    </div>
  );
}

export default App;









// import React, {useReducer} from 'react';
// import {StateProvider} from "./context";



// function App() {

//   const initialState = {

//     name: "Dustin"

//   };


//   const reducer = {state, action} => {
//     switch (action.type) {

//       default: 
//        return state;
//     }
//   }

//   return (
//     <div className="App">
//       <StateProvider value={useReducer(reducer, initialState)}>
//       <h1>Hello World</h1>
//       </StateProvider>
//     </div>
//   );
// }

// export default App;
