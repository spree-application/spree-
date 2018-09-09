import * as commonActionTypes from './actionTypes';

export const setDimensions = window => (
  {
    type: commonActionTypes.DIMENSION_CHANGED_WINDOW,
    payload: window
  }
);
