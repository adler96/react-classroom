import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Student from './Student'
import AddStudent from './AddStudent'

export default function Classroom(props) {
    const [ students, setStudents ] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3333/learners')
        .then(res => {
            const apprenants = res.data;
            setStudents(apprenants);
            setIsLoading(false);
        })
        .catch(err => {setError(err); setIsLoading(false);})
    }, []);

    function handleDelete(id) {
        axios.delete(`http://localhost:3333/learners/${id}`)
        .then(res => setStudents( prevState => (
            prevState.filter( student => student.id !== id)
        )))
        .catch( err => setError(error))
    }

    function handleAdd(nom) {
        axios.post('http://localhost:3333/learners/', {nom} )
        .then(response => {
            const newStudent = response.data;
            setStudents([...students, newStudent]);
        })
        .catch(error => console.log('MyError = '+error));
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
                    (isLoading) ? <p>Loading...</p> :
                    students.map(student => <Student
                        student={student}
                        key={student.id}
                        onDelete={handleDelete} />)
                }
            </ul>
        </div>
    )
}
