export const actionType = {
    SET_SCORE: "SET_SCORE",   
  } as const;
  
  
  type ActionType = typeof actionType[keyof typeof actionType];
  
  export interface Action {
    type: ActionType;
    [key: string]: any; 
  }
  
  const reducer = (state: any, action: Action): any => {
    switch (action.type) {
      case actionType.SET_SCORE:
        return {
          ...state,
          score: action.score,
        };
          default:
        return state;
    }
  };
  
  export default reducer;
  