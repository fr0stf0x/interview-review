import React from 'react';

import { columnTypes } from '~/src/components/DataTable/config';
import { getGamutColors, colorfulColors } from '~/src/utils';
import Level from './components/Level';
import Star from './components/Star';
import { MAX_LEVEL } from '~/src/constant';

const headers = [
  {
    value: 'order',
    type: columnTypes.NUMBER,
    unsortable: true,
    title: '#',
  },
  {
    value: 'name',
    type: columnTypes.TEXT,
    title: 'Name',
  },
  {
    value: 'point',
    type: columnTypes.NUMBER,
    title: 'Point',
  },
  {
    value: 'level',
    type: columnTypes.CUSTOM,
    title: 'Level',
  },
  {
    value: 'star',
    type: columnTypes.CUSTOM,
    title: 'Star',
  },
];

export const data = [
  {
    id: 1,
    order: 1,
    name: 'Mike',
    point: 1230,
    level: 8,
    star: 3,
  },
  {
    id: 2,
    order: 2,
    name: 'Alex',
    point: 45,
    level: 5,
    star: 2,
  },
  {
    id: 3,
    order: 4,
    name: 'Christopher',
    point: 0,
    level: 2,
    star: 1,
  },
  {
    id: 4,
    order: 3,
    name: 'John',
    point: -60,
    level: 0,
    star: 0,
  },
];

export const createRenderReadyHeaders = (dataCount) => {
  const colors = dataCount <= colorfulColors.length
    ? colorfulColors
    : getGamutColors('#e46b6b', dataCount).reverse();

  return headers.map((col) => ({
    ...col,
    ...col.value === 'level' && ({
      render: (level, index) => (
        <Level
          width={`${(level / MAX_LEVEL) * 100}%`}
          color={colors[index]}
        />
      ),
    }),
    ...col.value === 'star' && ({
      render: (star) => (
        <Star star={star} />
      ),
    }),
  }));
};

export function fakeGetData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
      });
    }, 300);
  });
}
