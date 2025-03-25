import React from 'react';
import { Person } from '../../types';
import { Link } from 'react-router-dom';
type Props = {
  person: Person;
  onSelected: () => void;
};

export const PersonLink: React.FC<Props> = ({ person, onSelected }) => {
  return (
    <Link
      to={`/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
      onClick={() => onSelected(person.name)}
    >
      {person.name}
    </Link>
  );
};
