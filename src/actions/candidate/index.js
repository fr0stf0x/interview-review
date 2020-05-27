import types from './types';

export const replaceList = (candidates) => ({ type: types.REPLACE_LIST, payload: { candidates } });

export const addCandidate = (candidate) => ({ type: types.ADD_CANDIDATE, payload: { candidate } });

export const removeCandidate = (candidate) => ({ type: types.REMOVE_CANDIDATE, payload: { candidate } });

export const updateCandidate = (candidate) => ({ type: types.UPDATE_CANDIDATE, payload: { candidate } });

export const changeSortBy = (sortBy) => ({ type: types.CHANGE_SORT_BY, payload: { sortBy } });

export const changeSortDirection = (sortDir) => ({ type: types.CHANGE_SORT_DIRECTION, payload: { sortDir } });

