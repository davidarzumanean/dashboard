import { ChangeEventHandler, memo } from 'react';
import styles from '../input/Input.module.scss';

type selectProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLSelectElement>,
  label?: string,
  name?: string,
  options: JSX.Element,
}

const Select = ({ value, onChange, label, name = '', options }: selectProps) => {
  return (
    <div className={`${styles.inputContainer} ${styles.select}`}>
      {label && <label>{label}</label>}
      <select  value={value} onChange={onChange} name={name}>
        {options}
      </select>
    </div>
  )
}

export default memo(Select);