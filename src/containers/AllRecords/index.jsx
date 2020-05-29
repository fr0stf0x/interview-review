import React from 'react';
import { useHistory } from 'react-router-dom';
import DataTable from '~/src/components/DataTable';
import { createRenderReadyHeaders } from './dummyData';
import { getObjectPropSafely } from '~/src/utils';
import { useCandidateList } from '~/src/hooks/useCandidateList';
import { changeSortBy, changeSortDirection, removeCandidate } from '~/src/actions/candidate';
import { directions } from '~/src/constant';

const AllRecords = (props) => {
  const history = useHistory();

  const {
    sorted,
    sortBy,
    sortDir,
    dispatch,
  } = useCandidateList();

  const headers = createRenderReadyHeaders(sorted.length);

  const onClickSort = (newSortBy) => () => {
    if (newSortBy !== sortBy) {
      dispatch(changeSortBy(newSortBy));
    } else {
      switch (sortDir) {
        case directions.ASC:
          dispatch(changeSortDirection(directions.DESC));
          break;
        case directions.DESC:
          dispatch(changeSortDirection(directions.ASC));
      }
    }
  };

  const onClickRemove = (id) => () => {
    dispatch(removeCandidate({id}));
  };

  const onClickEdit = (id) => () => {
    history.push(`/edit/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl block">All candidates</h1>
      <div className="flex items-end rounded-sm shadow-lg p-4 w-full xl:w-3/5 overflow-x-scroll">
        {getObjectPropSafely(() => sorted.length) ? (
          <>
            <DataTable
              headers={headers}
              sortBy={sortBy}
              sortDir={sortDir}
              data={sorted}
              onClickSort={onClickSort}
              onClickRemove={onClickRemove}
              onClickEdit={onClickEdit}
              className="mt-3 table-auto table-striped w-full"
            />
          </>
        ) : (
          <div className="text-center">No data...</div>
        )}
      </div>
    </div>
  );
};

export default AllRecords;
