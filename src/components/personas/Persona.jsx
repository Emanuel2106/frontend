import React, { useState } from 'react';
import GridPersona from './GridPersona';
import FormPersona from './FormPersona';

export default function Persona() {
  const [currentView, setCurrentView] = useState('grid');
  const [personaToEdit, setPersonaToEdit] = useState(null);

  const handleAdd = () => {
    setPersonaToEdit(null);
    setCurrentView('form');
  };

  const handleEdit = (persona) => {
    setPersonaToEdit(persona);
    setCurrentView('form');
  };

  const handleBackToGrid = () => {
    setCurrentView('grid');
  };

  return (
    <>
      {currentView === 'grid' ? (
        <GridPersona 
          onAdd={handleAdd} 
          onEdit={handleEdit} 
          goBack={handleBackToGrid} 
        />
      ) : (
        <FormPersona 
          personaToEdit={personaToEdit} 
          fetchPersonas={handleBackToGrid} 
        />
      )}
    </>
  );
}
