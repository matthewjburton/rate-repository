import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import Constants from 'expo-constants';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(Constants.expoConfig.extra.apiUri);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };

  /*
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = loading ? undefined : data?.repositories;

  return { repositories, loading };
  */
};

export default useRepositories;
