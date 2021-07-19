import { MouseEventHandler, memo, useState } from 'react';
import { IUserInterface } from '../../../services/actions/ContactsActionTypes';
import Button from '../../forms/button/Button';
import Input from '../../forms/input/Input';
import Select from '../../forms/select/Select';
import Modal from '../Modal/Modal';
import styles from './EditContactModal.module.scss';

type EditContactProps = {
  editingContact: IUserInterface,
  closeAction: MouseEventHandler<HTMLButtonElement | Element>,
  saveAction: any,
}

const EditContactModal = ({ editingContact, closeAction, saveAction }: EditContactProps) => {
  const [editForm, setEditForm] = useState({
    ...editingContact,
    gender: '',
    department: '',
    contribution: '',
    isActive: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  const handleSave = () => {
    if (!isInvalidForm()) saveAction(editForm);
  }

  const isInvalidForm = () => !editForm.first_name || !editForm.email

  return (
    <Modal
      className={styles.editContactModal}
      header={(
        <div>Edit contact {editingContact.first_name + ' ' + editingContact.last_name}</div>
      )}
      body={(
        <>
          <div className={styles.row}>
            <Input
              placeholder="Enter Name Here"
              label="First Name:"
              name="first_name"
              error={!editForm.first_name}
              value={editForm.first_name || ''}
              onChange={handleChange} />
            <Input
              placeholder="Enter Last Here"
              label="Last Name:"
              name="last_name"
              value={editForm.last_name || ''}
              onChange={handleChange} />
          </div>
          <div className={`${styles.row} ${styles.col3}`}>
            <Input
              placeholder="Male"
              label="Gender:"
              name="gender"
              type="radio"
              value={editForm.gender || ''}
              onChange={handleChange} />
            <Input
              placeholder="Female"
              name="gender"
              type="radio"
              value={editForm.gender || ''}
              onChange={handleChange} />
            <Input
              placeholder="Other"
              name="gender"
              type="radio"
              value={editForm.gender || ''}
              onChange={handleChange} />
          </div>
          <Input
            placeholder="example@email.com"
            label="Email:"
            name="email"
            error={!editForm.email}
            value={editForm.email || ''}
            onChange={handleChange} />
          <div className={styles.row}>
            <Select
              label="Department:"
              name="department"
              value={editForm.department || ''}
              options={(
                <>
                  <option value="" disabled>Selcet department</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="it">IT</option>
                  <option value="support">Support</option>
                </>
              )}
              onChange={handleChange} />
            <Input
              placeholder="Eg. 4.870,65€"
              label="Contribution:"
              name="contribution"
              type="number"
              value={editForm.contribution || ''}
              onChange={handleChange} />
          </div>
          <div>
            <Input
              placeholder="Is active"
              name="isActive"
              type="checkbox"
              value={editForm.isActive}
              onChange={handleChange} />
          </div>
        </>
      )}
      footer={(
        <>
          <Button secondary onClick={closeAction} text="Cancel" />
          <Button primary onClick={handleSave} text="Save" />
        </>
      )}
      headerClass={styles.modalHeader}
      bodyClass={styles.modalBody}
      footerClass={styles.modalFooter}
      closeAction={closeAction}
    />
  )
}

export default memo(EditContactModal);