import React, { useEffect, useState, memo } from 'react';
import { IRootStore } from "../../services/Store";
import { getContacts } from "../../services/actions/ContactsActions";
import { useDispatch, useSelector } from "react-redux";
import Search from '../../components/forms/search/Search';
import UniversalTable from '../../components/UniversalTable/UniversalTable';
import Pagination from '../../components/Pagination/Pagination';
import { IUserInterface } from '../../services/actions/ContactsActionTypes';
import EditContactModal from '../../components/Modals/EditContactModal/EditContactModal';
import { editContact } from '../../services/api/contacts';
import styles from './Contacts.module.scss'

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector((state: IRootStore) => state.contacts);
  const [contacts, setContacts] = useState<IUserInterface[]>([]);
  const [search, setSearch] = useState<string>('');
  const [editingContact, setEditingContact] = useState<IUserInterface>({});
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    dispatch(getContacts(page, perPage));
  }, [dispatch, page, perPage]);

  useEffect(() => {
    const data = contactsData.data || [];
    setContacts(data);
  }, [contactsData]);

  useEffect(() => {
    const filteredData = contactsData?.data?.length ? 
    contactsData.data.filter(data => data.first_name?.includes(search) || data.last_name?.includes(search) || data.email?.includes(search)) 
    : []
    setContacts(filteredData);
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const cancelEdit = () => {
    setEditingContact({});
  }

  const handleSave = async (updatedContact: IUserInterface) => {
    await editContact(updatedContact);
    cancelEdit();
  }

  const bodyItems = () => {
    return contacts.length ? contacts.map(contact => (
      {
        id: contact.id,
        doAction: () => setEditingContact(contact),
        items: [
          {
            id: contact.id + 'name',
            content: (
              <div className={styles.nameContainer}>
                <img src={contact.avatar} alt="[O]" className={styles.avatar} />
                {contact.first_name + ' ' + contact.last_name}
              </div>
            ),
          },
          {
            id: contact.id + 'sales',
            content: 'Sales',
          },
          {
            id: contact.id + 'email',
            content: contact.email,
          },
          {
            id: contact.id + 'number',
            content: '245514455',
          },
        ]
      }
    )) : []
  }

  return (
    <div className={styles.contactsContainer}>
      <Search value={search} onChange={handleChange} />

      <div className={styles.tableWrapper}>
        <UniversalTable bodyItems={bodyItems()} />
        <Pagination page={page} perPage={perPage} setPage={setPage} setPerPage={setPerPage} totalPages={contactsData.total_pages} />
      </div>

      {editingContact.id &&
        <EditContactModal closeAction={cancelEdit} editingContact={editingContact} saveAction={handleSave} />
      }
    </div>
  )
}

export default memo(Contacts);