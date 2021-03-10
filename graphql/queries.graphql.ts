import gql from 'graphql-tag';

export const AllUsersQuery = gql`
    query AllUsers {
        allUsers {
            idUserPk
            email
        }
    }
`;

export const PrincipalWithGroupQuery = gql`
    query PrincipalWithGroup {
        principals{
            idPrincipalPk
            titulo
            grupoDoPrincipal{
            idGrupoDoPrincipalPk
            titulo
            }
        }
    }
`;