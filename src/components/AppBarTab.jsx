import { Text, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.textAppBar,
    fontSize: theme.fontSizes.subheading,
    padding: 24,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ name }) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{name}</Text>
    </Pressable>
  );
};

export default AppBarTab;
