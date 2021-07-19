import React, { memo } from 'react';
import { TablePropsType } from './TableTypes';
import UniversalTableRow from './UniversalTableRow';
import styles from './UniversalTable.module.scss'

const UniversalTable = ({ bodyItems }: TablePropsType) => {
  const doActionIfValid = (doAction: Function | undefined) => {
    if (typeof doAction === 'function') {
      doAction();
    }
  }

  return bodyItems.length ? (
    <table className={styles.universalTable}>
      <tbody>
        {bodyItems.map(row => (
          <UniversalTableRow onClick={() => doActionIfValid(row.doAction)} items={row.items} key={row.id} />
        ))}
      </tbody>
    </table>
  ) : <div>Table is empty</div>
}

export default memo(UniversalTable);