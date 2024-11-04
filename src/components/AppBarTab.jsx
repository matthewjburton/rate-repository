import { Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

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
    <Link to={`/${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <Text style={styles.tab}>{name}</Text>
    </Link>
  );
};

export default AppBarTab;
