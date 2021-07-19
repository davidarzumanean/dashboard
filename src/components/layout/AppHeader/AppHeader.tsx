import React, { FunctionComponent } from 'react';
import {
  useLocation
} from "react-router-dom";
import styles from './AppHeader.module.scss';

const AppHeader: FunctionComponent = () => {
  const location = useLocation();

  const getPageName = (): string => {
    return location.pathname.replace('/', '');
  }

  return (
    <header className={styles.header}>
      <div className={styles.pageName}>{getPageName()}</div>
    </header>
  )
}

export default AppHeader;