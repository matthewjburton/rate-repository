import { Text, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';

const AppBarTab = ({ name }) => {
  const styles = StyleSheet.create({
    tab: {
      color: theme.colors.textAppBar,
      fontSize: theme.fontSizes.subheading,
      padding: 24,
      fontWeight: theme.fontWeights.bold,
    },
  });

  return (
    <Pressable>
      <Text style={styles.tab}>{name}</Text>
    </Pressable>
  );
};

export default AppBarTab;
