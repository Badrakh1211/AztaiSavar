import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const Bell: React.FC = () => {
  return (
    <View style={styles.container}>
      <Link href={'/screens/notification'} style={styles.bell}>
        <FontAwesome5 name="bell" size={30} color="black" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  bell: {
    marginRight: 40,
    marginTop: 10,
  },
});

export default Bell;
