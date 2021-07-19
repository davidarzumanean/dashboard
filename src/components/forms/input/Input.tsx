import { ChangeEventHandler, memo } from 'react';
import styles from './Input.module.scss';

type inputProps = {
  value: any,
  onChange: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
  label?: string,
  type?: string,
  name?: string,
  error?: boolean,
}

const Input = ({ value, onChange, placeholder, label, type = 'text', name = '', error }: inputProps) => {
  const input = <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />

  return (
    <div className={`${styles.inputContainer} ${styles[type]}`}>
      {type === "text" || type === "number" ? (
        <>
          {label && <label>{label}</label>}
          {input}
        </>
      ) : (
        <label>{input}{placeholder}</label>
      )}
      {error && <div className={styles.error}>This field is required</div>}
    </div>
  )
}

export default memo(Input);