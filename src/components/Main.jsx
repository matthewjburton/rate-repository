import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';

const Main = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundMain,
      flexGrow: 1,
      flexShrink: 1,
    },
  });

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/*" element={<Navigate to="/repositories" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
