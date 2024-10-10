import React, { useState } from 'react';
import Numbers from './Components/Numbers';
import Search from './Components/Search';
import Form from './Components/Form';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Asif Ibrahim', number: '07930995085', id: 1 },
  ]);

  const addPerson = (newPerson) => {
    setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      
      {/* Person form */}
      <Form addPerson={addPerson} persons={persons}/>

      {/* //seaching */}
      <Search persons= {persons}/>

      {/* Numbers */}
      <Numbers persons = {persons}/>
    </div>
  );
};

export default App;
