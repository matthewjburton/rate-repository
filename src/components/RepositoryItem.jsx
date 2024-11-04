import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RepositoryItem = ({ repository }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundContainer,
      padding: 16,
      gap: 12,
      flex: 1,
    },
    flexContainer: {
      display: 'flex',
      gap: 8,
      flex: 1,
    },
    flexContainerRow: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
    },
    language: {
      display: 'flex',
      backgroundColor: theme.colors.backgroundLanguage,
      color: theme.colors.textAppBar,
      alignSelf: 'flex-start',
      padding: 6,
      borderRadius: 5,
      overflow: 'hidden',
    },
    stats: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 1,
    },
    stat: {
      display: 'flex',
      padding: 8,
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    description: {
      flexWrap: 'wrap',
    },
  });

  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexContainerRow}>
        <Image
          style={styles.image}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.flexContainer}>
          <Text fontWeight="bold" fontSize="subheading">
            {repository.fullName}
          </Text>
          <Text
            color="textSecondary"
            fontSize="subheading"
            style={styles.description}
          >
            {repository.description}
          </Text>
          <Text fontSize="subheading" style={styles.language}>
            {repository.language}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text fontSize="subheading" fontWeight="bold">
            {formatCount(repository.stargazersCount)}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Stars
          </Text>
        </View>
        <View style={styles.stat}>
          <Text fontSize="subheading" fontWeight="bold">
            {formatCount(repository.forksCount)}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Forks
          </Text>
        </View>
        <View style={styles.stat}>
          <Text fontSize="subheading" fontWeight="bold">
            {formatCount(repository.reviewCount)}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Reviews
          </Text>
        </View>
        <View style={styles.stat}>
          <Text fontSize="subheading" fontWeight="bold">
            {formatCount(repository.ratingAverage)}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Rating
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
