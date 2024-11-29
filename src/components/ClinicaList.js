import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './ClinicaList.css';

const ClinicaList = ({ clinicas, onDelete, onEdit }) => {
  return (
    <div className="clinica-list-container">
      <h2>Lista das Clínicas</h2>
      <div className="clinica-list">
        {clinicas.map((clinica) => (
          <div className="clinica-card" key={clinica._id}>
            <div className="clinica-info">
              <span><strong>Nome:</strong> {clinica.nome}</span>
              <span><strong>Endereço:</strong> {clinica.endereco}</span>
              <span><strong>Especialidades:</strong> {clinica.especialidades?.join(', ') || 'Não informado'}</span>
              <span><strong>Telefone:</strong> {clinica.telefone}</span>
              <span><strong>Site:</strong> {clinica.site ? <a href={clinica.site} target="_blank" rel="noopener noreferrer">{clinica.site}</a> : 'Não informado'}</span> {/* Adicionando exibição do site */}
            </div>
            <div className="clinica-actions">
              <button className="edit" onClick={() => onEdit(clinica)}>
                <FaEdit /> Editar
              </button>
              <button className="delete" onClick={() => onDelete(clinica._id)}>
                <FaTrash /> Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicaList;
