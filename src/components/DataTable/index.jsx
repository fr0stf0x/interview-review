import React from 'react';
import { textAlignments, getTextAlignment, columnTypes } from './config';
import { directions } from '~/src/constant';

const HeaderCol = (props) => {
  const alignment = getTextAlignment(props.type);

  return (
    <th
      className={`
        text-${alignment} 
        ${props.className || ''} 
        ${props.unsortable ? '' : 'sortable'} 
        ${props.asc ? 'asc' : ''}
        ${props.desc ? 'desc' : ''}
      `}
    >
      {props.title}
      {!props.unsortable && (
        <i
          className={`
            leading-relaxed absolute right-0
            fas fa-${props.asc ? 'arrow-up' : props.desc ? 'arrow-down' : 'arrows-alt-v'}
         `}
          onClick={props.onClickSort(props.value)}
        />
      )}
    </th>
  );
};

const DataCol = (props) => {
  const alignment = getTextAlignment(props.header.type);

  return (
    <td className={`text-${alignment} ${props.className}`}>
      {
        typeof props.header.render === 'function'
          ? props.header.render(props.data, props.index)
          : props.data
      }
    </td>
  );
};

const DataTable = ({
  headers, data, className, onClickSort, sortBy, sortDir,
  onClickRemove, onClickEdit,
}) => (
  <table className={`${className}`}>
    <thead>
      <tr>
        {headers.map((col) => (
          <HeaderCol
            key={col.value} {...col}
            asc={sortBy === col.value && sortDir === directions.ASC}
            desc={sortBy === col.value && sortDir === directions.DESC}
            className="px-4 py-2"
            onClickSort={onClickSort}
          />
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={row.id}>
          {headers.map((col, idx) => (
            <DataCol
              index={rowIndex}
              key={`${row.id}-${idx}`}
              className="px-4 py-2"
              header={col}
              data={row[col.value]}
            />
          ))}
          <td className="text-center bg-default">
            <i className="fas fa-trash mr-4" onClick={onClickRemove(row.id)}></i>
            <i className="fas fa-edit" onClick={onClickEdit(row.id)}></i>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
