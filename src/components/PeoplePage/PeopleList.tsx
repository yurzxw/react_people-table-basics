import React, { useState } from 'react';
import { Person } from '../../types';
import { PersonLink } from './PersonLink';

type Props = {
  people: Person[];
};

export const PeopleList: React.FC<Props> = ({ people }) => {
  const [selected, setSelected] = useState('');

  return people.map((person: Person) => {
    const mother = people.find(p => p.name === person.motherName);
    const father = people.find(p => p.name === person.fatherName);

    return (
      <tr
        data-cy="person"
        key={person.name}
        className={selected === person.name ? 'has-background-warning' : ''}
      >
        <td>
          <PersonLink person={person} onSelected={setSelected} />
        </td>

        <td>{person.sex}</td>
        <td>{person.born}</td>
        <td>{person.died}</td>
        <td>
          {mother ? (
            <PersonLink person={mother} onSelected={setSelected} />
          ) : (
            person.motherName || '-'
          )}
        </td>
        <td>
          {father ? (
            <PersonLink person={father} onSelected={setSelected} />
          ) : (
            person.fatherName || '-'
          )}
        </td>
      </tr>
    );
  });
};
