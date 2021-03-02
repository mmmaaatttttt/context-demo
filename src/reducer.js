import { FORWARD, BACKWARD } from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case FORWARD:
      return {...state, reversed: false};
    case BACKWARD:
      return {...state, reversed: true};
    default:
      return state;
  }
}