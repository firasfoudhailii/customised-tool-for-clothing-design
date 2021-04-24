import axios from 'axios';
const url ="http://localhost:5000/dashboard";
const urlP="http://localhost:5000/prototypes";
export const fetchPrototypes = () => axios.get(urlP);
export const createPrototype = (newPrototype) => axios.post(url, newPrototype);
export const deletePrototype = (id) => axios.delete(`${urlP}/${id}`);