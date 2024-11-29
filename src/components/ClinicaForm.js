import React, { useState, useEffect } from 'react';
import './ClinicaForm.css';

const ClinicaForm = ({ clinica, onSave }) => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    especialidades: '',
    site: '' // Adicionando o campo 'site'
  });

  useEffect(() => {
    if (clinica) {
      setFormData(clinica);
    }
  }, [clinica]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      nome: '',
      endereco: '',
      telefone: '',
      especialidades: '',
      site: '' // Limpando o campo 'site'
    });
  };

  return (
    <div className="clinica-form-container">
      <h2>{clinica ? 'Atualizar Clínica' : 'Novo Cadastro'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Clínica"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={(e) =>
            setFormData({ ...formData, endereco: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={(e) =>
            setFormData({ ...formData, telefone: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Especialidades (separadas por vírgula)"
          value={formData.especialidades}
          onChange={(e) =>
            setFormData({ ...formData, especialidades: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Site"
          value={formData.site}
          onChange={(e) =>
            setFormData({ ...formData, site: e.target.value })
          }
        />
        <button type="submit">{clinica ? 'Atualizar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
};

export default ClinicaForm;
