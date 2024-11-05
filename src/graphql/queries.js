import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...Repository
        }
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      username
    }
  }
`;
