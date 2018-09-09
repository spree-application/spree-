import { Dimensions } from 'react-native';
import * as commonActionTypes from './actionTypes';

const initialState = {
  window: Dimensions.get('window')
};

export default function (
  state = initialState,
  {
    type, payload, error, meta
  }
) {
  switch (type) {
    case commonActionTypes.DIMENSION_CHANGED_WINDOW:
      return {
        ...state,
        window: payload
      };
    default:
      return state;
  }
}
