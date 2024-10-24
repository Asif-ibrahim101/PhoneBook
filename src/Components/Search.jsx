import React, { useState } from 'react';

const Search = ({ persons }) => {
  const [search, setSearch] = useState('');

  // Handle search input change
  const HandleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Search</h2>
      <input 
        type="text" 
        value={search} 
        onChange={HandleSearch} 
        placeholder="Search by name" 
      />
      
      {/* Display the searched results */}
      <div>
        {search === '' ? null : (
          filteredPersons.length > 0 ? (
            filteredPersons.map((person) => (
              <div key={person.id}>
                <p>{person.name} - {person.number}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )
        )}
      </div>
    </>
  );
};

export default Search;
