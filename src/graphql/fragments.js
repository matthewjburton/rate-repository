import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment Repository on Repository {
    description
    forksCount
    fullName
    id
    language
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
  }
`;
