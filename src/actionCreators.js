import { FORWARD, BACKWARD } from "./actionTypes";

export function setForward() {
  return { type: FORWARD };
}

export function setBackward() {
  return { type: BACKWARD };
}
