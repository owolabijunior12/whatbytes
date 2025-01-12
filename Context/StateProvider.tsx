"use client"
import React, { createContext, useContext, useReducer, Dispatch } from "react";
import { State} from "./initalState"; 
import { Action } from "./reducer"; 


type StateContextType = [State, Dispatch<Action>];


export const StateContext = createContext<StateContextType | undefined>(undefined);

interface StateProviderProps {
  reducer: React.Reducer<State, Action>;
  initialState: State;
  children: React.ReactNode;
}

// Define the StateProvider component
export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const contextValue = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the context
export const useStateValue = (): StateContextType => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }

  return context;
};
