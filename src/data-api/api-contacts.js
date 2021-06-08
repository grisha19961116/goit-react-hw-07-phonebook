const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000';
const asyncGetContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

const postContacts = async contact => await axios.post(`/contacts`, contact);
const deletePostContacts = async id => await axios.delete(`/contacts/${id}`);

export { asyncGetContacts, postContacts, deletePostContacts };
