import Main from './src/components/Main';
import { NativeRouter as Router } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.expoConfig);
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </Router>
  );
};

export default App;
