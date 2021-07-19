import React, { memo } from 'react';
import { RowType } from './TableTypes';
import UniversalTableCell from './UniversalTableCell';

const UniversalTableRow = ({ items, onClick }: RowType) => {
  return (
    <tr onClick={onClick}>
      {items.map(cell => (
          <UniversalTableCell content={cell.content} key={cell.id} />
        )
      )}
    </tr>
  )
}

export default memo(UniversalTableRow);