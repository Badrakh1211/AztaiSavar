import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Bell from '../utils/bell';

const AddPoster: React.FC = () => {
  return (
    <View style={styles.container}>
      <Bell />
      <Text>Add your poster</Text>
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
});

export default AddPoster;
