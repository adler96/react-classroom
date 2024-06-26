import React, { useState } from 'react'

function AddStudent({ onAdd }) {
  const [nom, setNom] = useState("");

  function handleChange(event) {
    setNom(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(nom);
    setNom("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="Nom de l'apprenant"
        value={nom}
        onChange={handleChange} />
        <input type="submit" value="Ajoutez" />
      </form>
    </div>
  )
}

export default AddStudent
