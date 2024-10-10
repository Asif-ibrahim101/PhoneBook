import React from 'react'

const Numbers = ({ persons}) => {
    return (
        <>
            <h2>Numbers</h2>
            <div>
                {persons.map((person) => (
                    <div key={person.id}>
                        <p>{person.name} - {person.number}</p>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Numbers;
