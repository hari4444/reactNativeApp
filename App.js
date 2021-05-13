import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {
  uri: 'https://i.pinimg.com/originals/99/a2/dc/99a2dcfa8eade86cdcc9ac747d75fae5.jpg',
};

const App = () => (
  <View style={styles.container}>
    <View style = {styles.backgroundContainer}>
    <ImageBackground source={image} style={styles.backdrop} />
    </View>
    <View style = {styles.overlay}>
      <Text style = {styles.headline}>WAIIIIFU</Text>
    </View>
  </View>
);




const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    opacity: 0.8,
    backgroundColor: 'transparent'
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    top: 8,
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent"
  }
});

export default App;
