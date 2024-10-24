import React, { useState, useEffect } from 'react';
import Numbers from './Components/Numbers';
import Search from './Components/Search';
import Form from './Components/Form';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  // Fetch data from the JSON server when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/persons')
      .then((response) => {
        setPersons(response.data);  // Store the fetched data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addPerson = (newPerson) => {
    axios.post('http://localhost:3000/persons', newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data));  // Add the new person to the state
      })
      .catch((error) => {
        console.error('Error adding person:', error);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      
      {/* Person form */}
      <Form addPerson={addPerson} persons={persons} />

      {/* Search */}
      <Search persons={persons} />

      {/* Numbers */}
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
