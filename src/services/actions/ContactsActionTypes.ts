export const CONTACTS_LOADING = "CONTACTS_LOADING";
export const CONTACTS_FAIL = "CONTACTS_FAIL";
export const CONTACTS_SUCCESS = "CONTACTS_SUCCESS";

export interface ContactsLoading {
  type: typeof CONTACTS_LOADING,
}
export interface ContactsFail {
  type: typeof CONTACTS_FAIL,
  error: string,
}
export interface ContactsSuccess {
  type: typeof CONTACTS_SUCCESS,
  payload?: IContactsInterface[]
}

export interface IContactsInterface {
  page?: number,
  per_page?: number,
  total?: number | null,
  total_pages?: number | null,
  data?: IUserInterface[],
}

export interface IUserInterface {
  id?: number,
  email?: string,
  first_name?: string,
  last_name?: string,
  avatar?: string,
  gender?: string,
}

export type ContactsDispatchTypes = ContactsLoading | ContactsFail | ContactsSuccess;
