/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  View,
  Image,
  ImageBackground,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView>
        <View>
        <Button
  onPress={() => Alert.alert('Simple Button pressed','Esta es la sala de Pueblos originarios')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  />  
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
