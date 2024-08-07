import React from 'react';

type StudentsType = {
    id: number,
    name: string,
    age: number,
}

type NewComponentsType = {
    students: StudentsType[]
}

export const NewComponents = ({students}: NewComponentsType) => {
    return (
        <ul>
            {students.map(student => (
                <div key={student.id}>
                    <li> Name: {student.name} -- Age: {student.age} </li>
                </div>
            ))}
        </ul>
    );
};