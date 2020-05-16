import React, { createContext, useContext, useReducer} from 'react'


const GlobalStateContext = createContext([])

export default function (props) {
  const [ globalState, setGlobalState ] = useReducer(reducer, {})
  const { children, ...rest } = props
  
  function reducer (currentState, newState) {
    return {...currentState, ...newState}
  }

  return (
    <GlobalStateContext.Provider props={rest} value={[ globalState, setGlobalState ]}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)