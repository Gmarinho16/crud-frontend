import React, { useState, useEffect } from 'react';
import ClinicaForm from '../components/ClinicaForm';
import ClinicaList from '../components/ClinicaList';
import { getClinicas, createClinica, updateClinica, deleteClinica } from '../services/clinicaService';

const Home = () => {
  const [clinicas, setClinicas] = useState([]);
  const [editingClinica, setEditingClinica] = useState(null);

  const fetchClinicas = async () => {
    const data = await getClinicas();
    setClinicas(data);
  };

  useEffect(() => {
    fetchClinicas();
  }, []);

  const handleSave = async (clinica) => {
    if (editingClinica) {
      await updateClinica(editingClinica._id, clinica);
    } else {
      await createClinica(clinica);
    }
    setEditingClinica(null);
    fetchClinicas();
  };

  const handleDelete = async (id) => {
    await deleteClinica(id);
    fetchClinicas();
  };

  return (
    <div>
      <ClinicaForm clinica={editingClinica} onSave={handleSave} />
      <ClinicaList clinicas={clinicas} onDelete={handleDelete} onEdit={setEditingClinica} />
    </div>
  );
};

export default Home;
