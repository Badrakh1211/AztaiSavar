import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Bell from '../utils/bell';
import { useFonts } from 'expo-font';
import CardWanted from '../components/cardWanted';

const Wanted = () => {
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
    <View style={styles.container}>
      <Bell />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Wanted animals</Text>
        <CardWanted />
        <CardWanted />
        <CardWanted />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: '500',
    fontFamily: 'Mono',
    alignSelf: 'center',
  },
});

export default Wanted;
