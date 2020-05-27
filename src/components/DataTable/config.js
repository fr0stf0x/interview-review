export const columnTypes = {
  TEXT: 1,
  NUMBER: 2,
  CUSTOM: 3,
};

const textAlignments = {
  [columnTypes.TEXT]: 'left',
  [columnTypes.NUMBER]: 'right',
  DEFAULT: 'center',
};

export const getTextAlignment = (type) => textAlignments[type] || textAlignments.DEFAULT;
