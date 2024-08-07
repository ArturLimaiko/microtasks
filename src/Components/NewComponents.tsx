import React from 'react';

type StudentsType = {
    id: number,
    name: string,
    age: number,
}

type NewComponentsType = {
    students: StudentsType[]
}

type CarsType = {
    manufacturer: string,
    model: string
}

type TopCarsType = {
    cars: CarsType[]
}


export const Cars = ({cars}: TopCarsType) => {
    return (
        <table>
            <tr>
                {cars.map((cars, index) => (
                    <td key={index}>
                        {cars.manufacturer} -- model: {cars.model}
                    </td>
                ))}
            </tr>
        </table>
    )
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