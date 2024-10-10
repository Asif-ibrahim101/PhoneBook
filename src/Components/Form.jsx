import React, { useState } from 'react';

const Form = ({ addPerson, persons }) => {
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  // Submit the form
  const OnSubmit = (e) => {
    e.preventDefault();

    const checkMatchName = persons.some(person => person.name === newName);
    const checkMatchNumber = persons.some(person => person.number === newNum);

    if (checkMatchName || checkMatchNumber) {
      alert(`The name ${newName} or the number ${newNum} already exists`);
    } else {
      const PersonsObj = {
        name: newName,
        number: newNum,
        id: Date.now() // Generate unique ID
      };
      addPerson(PersonsObj); // Call the addPerson function passed from App
      setNewName('');
      setNewNum('');
    }
  };

  const HandleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const HandleChangeNum = (e) => {
    setNewNum(e.target.value);
  };

  return (
    <form onSubmit={OnSubmit}>
      <div>
        Name: <input value={newName} onChange={HandleChangeName} placeholder='Enter your name' />
      </div>

      <div>
        Number: <input value={newNum} onChange={HandleChangeNum} placeholder='Enter your number' />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default Form;
