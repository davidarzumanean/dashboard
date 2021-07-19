import axios from "axios";
import { IUserInterface } from "../actions/ContactsActionTypes";

const fetchContacts = async (page: number = 1, perPage: number = 10) => {
    try {
        const contacts = await axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&per_page=${perPage}`);

        return contacts;
    } catch (e) {
        return e.message;
    }
};

const editContact = async (userData: IUserInterface) => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/users/${userData.id}`, userData);

        return res;
    } catch (e) {
        return e.message;
    }
};

export {
    fetchContacts,
    editContact,
};