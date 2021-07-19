import React, { memo } from 'react';
import { CellType } from './TableTypes';
import styles from './UniversalTable.module.scss'

const UniversalTableRow = ({ content }: CellType) => {
  return (
    <td className={styles.tableCell}>
      {typeof content === "function" ? content() : content}
    </td>
  )
}

export default memo(UniversalTableRow);