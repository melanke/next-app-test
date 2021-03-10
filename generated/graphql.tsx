import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  idUserPk?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type Principal = {
  __typename?: 'Principal';
  idPrincipalPk?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  grupoDoPrincipal?: Maybe<GrupoDoPrincipal>;
};

export type GrupoDoPrincipal = {
  __typename?: 'GrupoDoPrincipal';
  idGrupoDoPrincipalPk?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  users: Array<User>;
  principals: Array<Principal>;
  grupoDoPrincipals: Array<GrupoDoPrincipal>;
};


export type QueryAllUsersArgs = {
  email?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryPrincipalsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PrincipalWhereUniqueInput>;
  after?: Maybe<PrincipalWhereUniqueInput>;
};


export type QueryGrupoDoPrincipalsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<GrupoDoPrincipalWhereUniqueInput>;
  after?: Maybe<GrupoDoPrincipalWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bigRedButton?: Maybe<Scalars['String']>;
  createOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
  deleteManyUser?: Maybe<BatchPayload>;
  updateOneUser?: Maybe<User>;
  updateManyUser?: Maybe<BatchPayload>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type UserWhereUniqueInput = {
  idUserPk?: Maybe<Scalars['Int']>;
};

export type PrincipalWhereUniqueInput = {
  idPrincipalPk?: Maybe<Scalars['Int']>;
};

export type GrupoDoPrincipalWhereUniqueInput = {
  idGrupoDoPrincipalPk?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count?: Maybe<Scalars['Int']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  idUserPk?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'idUserPk' | 'email'>
  )>>> }
);

export type PrincipalWithGroupQueryVariables = Exact<{ [key: string]: never; }>;


export type PrincipalWithGroupQuery = (
  { __typename?: 'Query' }
  & { principals: Array<(
    { __typename?: 'Principal' }
    & Pick<Principal, 'idPrincipalPk' | 'titulo'>
    & { grupoDoPrincipal?: Maybe<(
      { __typename?: 'GrupoDoPrincipal' }
      & Pick<GrupoDoPrincipal, 'idGrupoDoPrincipalPk' | 'titulo'>
    )> }
  )> }
);


export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    idUserPk
    email
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};
export const PrincipalWithGroupDocument = gql`
    query PrincipalWithGroup {
  principals {
    idPrincipalPk
    titulo
    grupoDoPrincipal {
      idGrupoDoPrincipalPk
      titulo
    }
  }
}
    `;

export function usePrincipalWithGroupQuery(options: Omit<Urql.UseQueryArgs<PrincipalWithGroupQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PrincipalWithGroupQuery>({ query: PrincipalWithGroupDocument, ...options });
};