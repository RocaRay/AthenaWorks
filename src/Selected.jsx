import React from 'react';

const Selected = props => {
  let {person} = props;
  let formattedName = `${person.name.first} ${person.name.last}`.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
  if (!person.name) return "Select a user";

  return (
    <div id="selected">

      <div className="imagesContainer">
        <img className="blurredImage" src={person.picture.large} />
        <img className="realImage" src={person.picture.large} />
      </div>

      <div className="info">
        <h3>Name</h3>
        <p>{formattedName}</p>

        <h3>ID</h3>
        <p>{person.id.value ? person.id.value : "N/A"}</p>

        <h3>Email Address</h3>
        <p>{person.email}</p>

        <h3>Phone Number</h3>
        <p>{person.phone}</p>
      </div>

    </div>
  )
}

export default Selected;