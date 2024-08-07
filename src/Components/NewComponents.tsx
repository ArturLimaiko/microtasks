import React from 'react';

type StudentsType = {
    id: number,
    name: string,
    age: number,
}


type CarsType = {
    manufacturer: string,
    model: string
}

type NewComponentsType = {
    students: StudentsType[]
    cars: CarsType[]
}

export const NewComponents = ({students, cars}: NewComponentsType) => {
    return (
        <>
            <h2> STUDENTS </h2>
            <ul>
                {students.map(student => (
                    <div key={student.id}>
                        <li> Name: {student.name} -- Age: {student.age} </li>
                    </div>
                ))}
            </ul>

            <h2> CARS </h2>
            <table>
                <tr>
                    {cars.map((cars, index) => (
                        <td key={index}>
                            <div>-- Cars: {cars.manufacturer} --</div>
                            <div>-- model: {cars.model} --</div>
                        </td>
                    ))}
                </tr>
            </table>
        </>

    )
        ;
};