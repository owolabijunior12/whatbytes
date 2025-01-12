/* eslint-disable @typescript-eslint/no-explicit-any */


export interface State {
  [x: number]: any;
  score: {
    rank: number;
    percentile: number;
    currentScore: number;
    [x: number]: number; 
  } | null;
}
export const initialState: State = {
  score: {
    rank: 11,
    percentile: 40,
    currentScore: 2,   
  }, 
};
