import { ChangeEventHandler, memo } from 'react';
import Input from '../input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Search.module.scss';

type searchProp = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

const Search = ({ value, onChange }: searchProp) => {
  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon icon={faSearch} />
      <Input type="text" placeholder="Search user" value={value} onChange={onChange} />
    </div>
  )
}

export default memo(Search);