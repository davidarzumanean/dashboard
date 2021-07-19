import { MouseEventHandler, memo } from 'react';
import styles from './Button.module.scss';

type inputProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  text?: string,
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
}

const Button = ({ onClick, text = '', primary, secondary, disabled = false }: inputProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${styles.button} ${primary ? styles.primary : ''}${secondary ? styles.secondary : ''}`}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default memo(Button);