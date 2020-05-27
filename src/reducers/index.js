import { sortBy } from '../utils';

const logBefore = (state, action) => {
  console.log(action);
  console.log(state);
  return state;
};

const logAfter = (state) => {
  console.log(state);
  console.log('-------------------');
  return state;
};

const sort = (state) => {
  console.log('OUTPUT: state', state);
  return {
    ...state,
    sorted: sortBy(state.sortBy, state.sortDir)(state.candidates),
  };
};

export const applyMiddlewares = ({ state, action, handler }) => {
  const chain = [logBefore, handler, logAfter];

  return chain.reduce((st, fn) => fn(st, action), state);
};

export const createReducer = (handlers) => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return applyMiddlewares({
    state,
    action,
    handler: handlers[action.type],
  });
};
