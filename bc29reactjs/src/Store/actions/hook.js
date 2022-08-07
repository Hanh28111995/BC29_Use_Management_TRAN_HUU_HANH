import { SET_DISTRICTS, SET_PROVINCES } from "../types/hook";
import axios from 'axios';

const setProvincesAction = (data) => {
  return async (dispatch) => {
    const result = await axios.get(
      "https://613cb968270b96001798b246.mockapi.io/provinces"
    );
    dispatch({
      type: SET_PROVINCES,
      payload: result.data,
    });
  };
};
const setDistrictsAction = (data) => {
    return async (dispatch) => {
        const result = await axios.get(
            "https://613cb968270b96001798b246.mockapi.io/districts"
          );
        dispatch({
          type: SET_DISTRICTS,
          payload: result.data,
        });
      };
    };
export { setProvincesAction, setDistrictsAction };
