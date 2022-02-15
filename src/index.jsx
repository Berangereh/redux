import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';



const App = () => {
    const BUY_PASTAS = 'BUY_PASTAS';
    const EAT_PASTAS = 'EAT_PASTAS';

    const BUY_PASTAS = () => {
        return {
            type: 'BUY_PASTAS'
      }

      const initialState = {
        pastas: 4,
        rice: 8
      };
      const pastasReducer = (state = initialState, action) => {
        switch(action.type) {
          case 'BUY_PASTAS':
            return {
                ...state,
                pastas: state.pastas + action.weight
            };
            case 'EAT_PASTAS':
                return {
                  ...state,
                  pastas: state.pastas - action.weight
                }
        }
    }
      const riceReducer = (state = initialState, action) => {
        switch(action.type) {
              case 'BUY_RICE':
                return {
                  ...state,
                  rice: state.rice + action.weight
                }
              case 'EAT_RICE':
                return {
                  ...state,
                  rice: state.rice - action.weight
                }
              default:
                return state
            }
        }
      
        return state;
      }

      let store = createStore(counter); // counter is the name of our future reducer function
      store.subscribe(() => console.log(store.getState()));
      
      
      store.dispatch(BUY_PASTAS(2));

  
      return null;
}

ReactDOM.render(<App />, document.querySelector("#root"));