import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Bell from '../utils/bell';
import CardFounded from '../components/cardFounded';

const Founded: React.FC = () => {
  return (
    <View style={styles.container}>
      <Bell />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Founded animals</Text>
        <CardFounded />
        <CardFounded />
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

export default Founded;
