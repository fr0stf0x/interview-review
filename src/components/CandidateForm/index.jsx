import React, { useState } from 'react';
import Button from '~/src/components/Button';
import { MAX_LEVEL } from '~/src/constant';

import useInput from '~/src/hooks/useInput';
import constrant from './constrant';
import { executeWithObject } from '~/src/utils';

const CandidateForm = (props) => {
  const { value: name, bind: bindName } = useInput(props.name);
  const { value: point, bind: bindPoint } = useInput(props.point);
  const { value: level, bind: bindLevel } = useInput(props.level);
  const { value: star, bind: bindStar } = useInput(props.star);
  const [errors, setErrors] = useState({});

  const hasError = (newErrors) => Object.entries(newErrors).filter(([_, v]) => v).length;

  const validate = (form) => executeWithObject.entries(([name, { validate, message }]) => (validate(form[name]) ? false : message))(constrant);

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate({
      name,
      point,
      level,
      star,
    });

    setErrors(newErrors);

    if (!hasError(newErrors)) {
      props.callback({
        name,
        point,
        level,
        star,
      });
    }
  };

  return (
    <form className="w-1/3 flex flex-col" onSubmit={onSubmit}>
      <label
        className="flex mt-3 items-center"
      >
        <span className="block w-1/4 text-sm font-semibold">Name</span>
        <input
          className="form-input flex-1 text-indigo-500"
          type="text"
          name="name"
          {...bindName}
        />
      </label>
      {errors.name && (
        <span className="error ml-1/4 mt-2">{errors.name}</span>
      )}
      <label
        className="flex mt-3 items-center lg:w-full"
      >
        <span className="block w-1/4 text-sm font-semibold">Point</span>
        <input
          className="form-input w-1/4 text-indigo-500"
          type="number"
          name="point"
          {...bindPoint}
        />
      </label>
      <label
        className="flex mt-3 items-center lg:w-full"
      >
        <span className="block w-1/4 text-sm font-semibold">Level</span>
        <input
          min="0"
          max={MAX_LEVEL}
          className="form-input w-1/4 text-indigo-500"
          type="number"
          name="level"
          {...bindLevel}
        />
      </label>
      <label
        className="flex mt-3 items-center lg:w-full"
      >
        <span className="block w-1/4 text-sm font-semibold">Star</span>
        <input
          className="form-input w-1/4 text-indigo-500"
          min="0"
          type="number"
          name="star"
          {...bindStar}
        />
      </label>

      <div className="mt-6 block text-center">
        <Button type="submit">{props.create ? 'Create' : 'Edit'}</Button>
      </div>
    </form>
  );
};

export default CandidateForm;
