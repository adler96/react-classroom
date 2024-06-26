import React, { useState } from 'react'
import Student from './Student'
import AddStudent from './AddStudent'

export default function Classroom(props) {
    const [ students, setStudents ] = useState(
        [
            {id:1, nom:"Fatou Dia"},
            {id:2, nom:"Saliou Diouf"},
            {id:3, nom:"Alain Gomis"}
        ]
    );

    function handleDelete(id) {
        setStudents(prevStudents => 
            prevStudents.filter(student => 
                student.id !== id
            ) 
        );
    }

    function handleAdd(nom) {
        const newStudent = {id: Date.now(), nom: nom};
        setStudents([...students, newStudent]);
    }

    // if(!students.length) {
    //     return (
    //         <div>
    //             <h1>La liste des apprenants de {props.nom}</h1>
    //             <p>Aucun apprenant</p>
    //         </div>
    //     )
    // }

    
    return (
        <div>
            <AddStudent onAdd={handleAdd} />
            <h1>Liste des Etudiants de {props.nom}</h1>
            <ul>
                {
                    (!students.length) ? <p>Aucun apprenant</p> :
                    students.map(student => <Student
                        student={student}
                        key={student.id}
                        onDelete={handleDelete} />)
                }
            </ul>
        </div>
    )
}
