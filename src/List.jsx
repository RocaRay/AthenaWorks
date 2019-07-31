import React from 'react';
import Person from './Person';

const List = props => {
  let people = props.people.map( (person, idx) => {
    let formattedName = `${person.name.first} ${person.name.last}`.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
    return <Person key={idx} person={person} thumbnailURL={person.picture.thumbnail} name={formattedName} selectPerson={props.selectPerson} selected={props.selected}/>
  })

  return (
    <div id="list">
      {people}
    </div>
  )
}

export default List;