import { createSelector } from 'reselect';

export const getCommonState = state => state.common;

export const getDimensions = state => state.common.window;
