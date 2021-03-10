import React from 'react';
import { usePrincipalWithGroupQuery } from '../generated/graphql';

const AllUsers: React.FC = () => {
    const [{ data, fetching, error }] = usePrincipalWithGroupQuery();
  
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
  
    return (
      <div>
        <p>There are {data?.principals.length} user(s) in the database:</p>
        <ul>
          {data?.principals.map(principal => (
            <li key={principal.idPrincipalPk}>{principal.titulo} do grupo {principal.grupoDoPrincipal?.titulo}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AllUsers;