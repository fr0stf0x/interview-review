import { sortBy, pipe } from '~/src/utils';
import types from '~/src/actions/candidate/types';
import { createReducer } from '..';
import { directions } from '~/src/constant';

const replace = (state, { payload }) => ({
  ...state,
  candidates: payload.candidates,
});

const changeSortBy = (state, { payload }) => ({
  ...state,
  sortBy: payload.sortBy,
});

const changeSortDirection = (state, { payload }) => ({
  ...state,
  sortDir: payload.sortDir,
});

const add = (state, { payload }) => ({
  ...state,
  candidates: [
    ...state.candidates,
    payload.candidate,
  ],
});

const remove = (state, { payload }) => ({
  ...state,
  candidates: state.candidates.filter((t) => t.id !== payload.candidate.id),
});

const update = (state, { payload }) => ({
  ...state,
  candidates: state.candidates.map((t) => (t.id === payload.candidate.id ? payload.candidate : t)),
});

const checkSortBy = (state) => (state.sortDir === directions.DESC ? changeSortDirection(state, { payload: { sortDir: directions.ASC } }) : state);

const checkDirection = (state) => (state.sortDir === directions.ASC ? changeSortBy(state, { payload: { sortBy: 'order' } }) : state);

const sort = (state) => ({
  ...state,
  sorted: sortBy(state.sortBy, state.sortDir)(state.candidates),
});

export default createReducer({
  [types.REPLACE_LIST]: pipe(replace, sort),
  [types.ADD_CANDIDATE]: pipe(add, sort),
  [types.REMOVE_CANDIDATE]: pipe(remove, sort),
  [types.UPDATE_CANDIDATE]: pipe(update, sort),
  [types.CHANGE_SORT_BY]: pipe(changeSortBy, checkSortBy, sort),
  [types.CHANGE_SORT_DIRECTION]: pipe(changeSortDirection, checkDirection, sort),
});
