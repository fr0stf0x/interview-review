import React, {
  useContext, useEffect, useReducer,
} from 'react';

import candidateReducer from '~/src/reducers/candidate';
import { replaceList } from '~/src/actions/candidate';

import { fakeGetData } from '../containers/AllRecords/dummyData';
import { directions } from '../constant';

const initState = {
  candidates: [],
  sortBy: 'order',
  sortDir: directions.ASC,
  sorted: [],
};

const CandidateListContext = React.createContext();

export const CancidateListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(candidateReducer, initState);

  useEffect(() => {
    fakeGetData().then((res) => {
      console.log('OUTPUT: CancidateListProvider -> res.data', res.data);
      dispatch(replaceList(res.data));
    });
  }, []);

  return (
    <CandidateListContext.Provider value={[state, dispatch]}>
      {children}
    </CandidateListContext.Provider>
  );
};

export const useCandidateList = () => {
  const [state, dispatch] = useContext(CandidateListContext);

  const getCandidateInfo = id => state.candidates.find(r => r.id === id);

  return {
    sortBy: state.sortBy,
    sortDir: state.sortDir,
    candidates: state.candidates,
    sorted: state.sorted,
    dispatch,
    getCandidateInfo,
  };
};
