import { SET_USER } from "./actionTypes";

export const setUser = userData => ({
  type: SET_USER,
  payload: {
    name: userData.name,
    surname: userData.surname,
  }
});