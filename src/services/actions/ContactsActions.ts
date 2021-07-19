import { Dispatch } from "redux";
import {
  CONTACTS_FAIL,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  ContactsDispatchTypes,
} from "./ContactsActionTypes";
import { fetchContacts } from "../api/contacts";

export const getContacts = (page: number, perPage: number) => async (dispatch: Dispatch<ContactsDispatchTypes>) => {
  try {
    dispatch({
      type: CONTACTS_LOADING,
    });

    const res = await fetchContacts(page, perPage);

    dispatch({
      type: CONTACTS_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CONTACTS_FAIL,
      error: e.data.message,
    })
  }
}
