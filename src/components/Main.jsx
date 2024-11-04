import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { View, StyleSheet } from 'react-native';

const Main = () => {
  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
    },
  });

  return (
    <View style={styles.flexContainer}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
