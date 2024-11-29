import axios from 'axios';

const baseURL = 'https://crud-backend-bay.vercel.app';

export const getClinicas = async () => {
  const response = await axios.get(`${baseURL}/clinica/listar`);
  return response.data;
};

export const createClinica = async (clinica) => {
  const response = await axios.post(`${baseURL}/clinica/criar`, clinica);
  return response.data;
};

export const updateClinica = async (id, clinica) => {
  const response = await axios.put(`${baseURL}/clinica/atualizar/${id}`, clinica);
  return response.data;
};

export const deleteClinica = async (id) => {
  const response = await axios.delete(`${baseURL}/clinica/deletar/${id}`);
  return response.data;
};
