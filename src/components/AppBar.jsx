import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data, loading, error } = useQuery(ME);
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  const handleSignOut = async () => {
    await authStorage.removeItem('accessToken');
    apolloClient.resetStore();
  };

  const isSignedIn = data?.me?.username != null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab
          name="Repositories"
          onPress={() => navigate('/repositories')}
        />
        {isSignedIn ? (
          <AppBarTab name="Sign Out" onPress={handleSignOut} />
        ) : (
          <AppBarTab name="Sign In" onPress={() => navigate('/sign-in')} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
