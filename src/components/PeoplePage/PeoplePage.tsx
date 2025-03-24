import { useEffect, useState } from 'react';
import { getPeople } from '../../api';
import { Person } from '../../types';
import { PeopleList } from './PeopleList';
import { Loader } from '../Loader';
export const PeoplePage = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<Person[] | []>([]);

  useEffect(() => {
    setLoading(true);
    getPeople()
      .catch(() => {
        throw new Error('Error');
      })
      .then(data => setPeople(data))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 300),
      );
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title" style={{ marginTop: '100px' }}>
          People Page
        </h1>

        <div className="block">
          <div className="box table-container">
            {loading ? (
              <Loader />
            ) : (
              <table
                data-cy="peopleTable"
                className="table is-striped is-hoverable is-narrow is-fullwidth"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Born</th>
                    <th>Died</th>
                    <th>Mother</th>
                    <th>Father</th>
                  </tr>
                </thead>
                <tbody>
                  <PeopleList people={people} />
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
