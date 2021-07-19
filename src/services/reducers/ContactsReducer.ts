import {
  IContactsInterface,
  CONTACTS_FAIL,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  ContactsDispatchTypes,
} from "../actions/ContactsActionTypes";

interface DefaultStateI extends IContactsInterface {
  loading?: boolean,
  error?: string,
}

const defaultState: DefaultStateI = {
  loading: false,
  error: '',
  page: 1,
  per_page: 10,
  total: null,
  total_pages: null,
  data: [],
};

const contactsReducer = (state: DefaultStateI = defaultState, action: ContactsDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case CONTACTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CONTACTS_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        ...action.payload,
      };
    default:
      return state;
  }
}

export default contactsReducer;
