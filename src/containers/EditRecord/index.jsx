import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateCandidate } from '~/src/actions/candidate';
import { useCandidateList } from '~/src/hooks/useCandidateList';
import { getObjectPropSafely } from '~/src/utils';
import CandidateForm from '~/src/components/CandidateForm';

const EditRecord = () => {
  const { dispatch, getCandidateInfo } = useCandidateList();
  const [candidateInfo, setCandidateInfo] = useState();

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (!getObjectPropSafely(() => params.id)) {
      history.push('/');

      return;
    }

    const info = getCandidateInfo(+params.id);

    if (!info) {
      history.push('/');

      return;
    }

    setCandidateInfo(info);
  }, [getObjectPropSafely(() => params.id)]);

  const callbackForm = (values) => {
    dispatch(updateCandidate({
      id: candidateInfo.id,
      ...values,
    }));

    history.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h1 className="text-xl">Edit record</h1>
      {candidateInfo && (
        <CandidateForm
          {...candidateInfo}
          callback={callbackForm}
        />
      )}
    </div>
  );
};

export default EditRecord;
