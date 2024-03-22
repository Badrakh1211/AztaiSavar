import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';

const Notifications: React.FC = () => {
  const [loaded] = useFonts({
    Mono: require('../../assets/fonts/Mono.ttf'),
  });
  const { user } = useUser();
  if (!loaded) {
    return <Text>Font not loaded</Text>;
  }
  return (
    <View style={styles.container}>
      <Link href={'..'} style={styles.return}>
        <AntDesign name="arrowleft" size={28} color="black" />
      </Link>
      <Text style={styles.title}>{user?.username}'s notification</Text>
      <View style={styles.notificationContainer}></View>
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
  title: {
    fontSize: 20,
    fontFamily: 'Mono',
    marginTop: 30,
  },
  notificationContainer: {
    width: '80%',
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Notifications;
