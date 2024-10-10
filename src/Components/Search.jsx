import React, { useState } from 'react'

const Search = ({ persons }) => {

    //seaching the names and numbers
    const [search, getsearch] = useState('');


    //handling search
    const HandleSearch = (e) => {
        getsearch(e.target.value);
    };

    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(search)
    );

    return (
        <>
            {/* //seaching */}
            <h2>Search</h2>
            <input type="text" value={search} onChange={HandleSearch} placeholder='Search by name' />

            {/* displaying the searched results*/}
            <div>
                {search === '' ? null : (
                    filteredPersons.length > 0 ? (
                        filteredPersons.map((person) => (
                            <div key={person.id}>
                                <p>{person.name} - {person.number}</p>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p> // Display message when no matches
                    ))}
            </div>
        </>
    )
}

export default Search