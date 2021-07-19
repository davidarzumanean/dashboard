import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.scss';

type ModalProps = {
  header?: React.ReactNode,
  body: React.ReactNode,
  footer?: React.ReactNode,
  closeAction: MouseEventHandler | undefined,
  className?: string,
  headerClass?: string,
  bodyClass?: string,
  footerClass?: string,
}

const Modal = ({ header, body, footer, closeAction, className, footerClass, bodyClass, headerClass }: ModalProps) => {
  return (
    <div className={`${styles.modalMask} ${className}`}>
      <div className={styles.modalContainer}>
        {(header || closeAction) &&
          <div className={`${styles.modalHeader} ${headerClass}`}>
            {header}
            {closeAction && <FontAwesomeIcon onClick={closeAction} icon={faTimes} />}
          </div>
        }
        <div className={`${styles.modalBody} ${bodyClass}`}>
          {body}
        </div>
        {footer &&
          <div className={`${styles.modalFooter} ${footerClass}`}>{footer}</div>
        }
      </div>
    </div>
  )
}

export default Modal;