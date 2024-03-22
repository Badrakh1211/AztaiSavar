import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const commentScreen = () => {
  return (
    <View style={styles.container}>
      <Link href={'..'} style={styles.return}>
        <AntDesign name="arrowleft" size={28} color="black" />
      </Link>
      <Text>Hello from Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  return: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20,
  },
});

export default commentScreen;
