import { Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

const AppBarTab = ({ name, onPress }) => {
  const styles = StyleSheet.create({
    tab: {
      color: theme.colors.textAppBar,
      fontSize: theme.fontSizes.subheading,
      padding: 24,
      fontWeight: theme.fontWeights.bold,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.tab}>{name}</Text>
    </TouchableOpacity>
  );
};

export default AppBarTab;
