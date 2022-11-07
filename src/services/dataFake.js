import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getCustomer = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("GET_CUSTOMER", error);
  }
};

export const getCustomers = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error("GET_CUSTOMERS", error);
  }
};

export const createCustomer = async (customer) => {
  try {
    const { data } = await axios.post(API_URL, customer);
    return data;
  } catch (error) {
    console.error("CREATE_CUSTOMER", error);
  }
};

export const editCustomer = async (id, customer) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, customer);
    return data;
  } catch (error) {
    console.error("EDIT_CUSTOMER", error);
  }
};

export const deleteCustomer = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("DELETE_CUSTOMER", error);
  }
};
