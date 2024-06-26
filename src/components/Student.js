import React from 'react'

export default function Student({ student, onDelete }) {
    return (
        <div>
            {student.nom} &emsp;
            <button 
            onClick={() => onDelete(student.id)}>
                X
            </button>
        </div>
    )
}