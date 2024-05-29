import React, { useState } from 'react'
import Student from './Student'

export default function Classroom(props) {
    const [ students, setStudents ] = useState(
        [
            {id:1, nom:"Fatou Dia"},
            {id:2, nom:"Saliou Diouf"},
            {id:3, nom:"Alain Gomis"}
        ]
    );

    return (
        <div>
            <h1>Liste des Etudiants de {props.nom}</h1>
            <ul>
                <Student nom={students[0].nom} />
                <Student nom={students[1].nom} />
                <Student nom={students[2].nom} />
            </ul>
        </div>
    )
}
