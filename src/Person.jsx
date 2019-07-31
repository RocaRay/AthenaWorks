import React from 'react';

const Person = props => {
  let {person, selected} = props;
  let formattedName = `${person.name.first} ${person.name.last}`.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
  return (
    <div className={"person" + (person.id === selected.id ? " selected" : "")} onClick={() => props.selectPerson(person)} >
      <img src={person.picture.thumbnail} alt='Img not found'></img>
      <span>{formattedName}</span>
    </div>
  )
}

export default Person;