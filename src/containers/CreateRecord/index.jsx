import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCandidateList } from '~/src/hooks/useCandidateList';

import { addCandidate } from '~/src/actions/candidate';
import CandidateForm from '~/src/components/CandidateForm';

const defaultValues = {
  name: '',
  point: 0,
  level: 0,
  star: 0,
};

const CreateRecord = (props) => {
  const { dispatch, candidates } = useCandidateList();

  const history = useHistory();

  const callbackForm = (values) => {
    dispatch(addCandidate({
      id: candidates.length + 1,
      order: candidates.length + 1,
      ...values,
    }));

    history.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-xl">Create record</h1>
      <CandidateForm
        {...defaultValues}
        create
        callback={callbackForm}
      />
    </div>
  );
};

export default CreateRecord;
