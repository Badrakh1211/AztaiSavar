import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { EvilIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const CardWanted: React.FC = () => {
  const [loaded] = useFonts({
    Mono: require('../../assets/fonts/Mono.ttf'),
  });
  if (!loaded) {
    return (
      <>
        <Text>Font not found</Text>
      </>
    );
  }
  return (
    <View style={styles.cardBorder}>
      <View style={styles.profile}>
        <Image style={styles.avatar} />
        <Text style={styles.username}>UserName</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>sdkfousdgosd</Text>
        <Image style={styles.image} />
      </View>
      <Link href={'/screens/comment'} style={styles.comment}>
        <EvilIcons name="comment" size={50} color="black" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBorder: {
    width: 320,
    maxHeight: 'auto',
    borderWidth: 2,
    borderColor: 'red',
    paddingBottom: 10,
    marginTop: 30,
  },
  profile: {
    display: 'flex',
    height: 60,
    borderWidth: 1,
    borderColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  username: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: '400',
    color: '#3c3e3c',
    fontFamily: 'Mono',
  },
  body: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'green',
    height: 'auto',
    paddingBottom: 10,
  },
  description: {
    fontFamily: 'Mono',
    color: '#3c3e3c',
    fontSize: 15,
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },
  comment: {
    alignSelf: 'center',
  },
});

export default CardWanted;
