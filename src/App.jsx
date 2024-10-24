import React, { useState, useEffect } from 'react';
import Numbers from './Components/Numbers';
import Search from './Components/Search';
import Form from './Components/Form';
import axios from 'axios';

const App = () => {
  const [newPerson, setNewPerson] = useState([]);

  const [persons, setPersons] = useState([
    { name: 'Asif Ibrahim', number: '07930995085', id: 1 },
  ]);

  useEffect(()=> {
    const response = (res)=>{
      console.log(res.data);
    };

    axios.get("http://localhost:3000/persons").then(response);
    
  },[]);

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
