import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>React Native</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Screen')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to Welcome</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('List')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Images')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to Images</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Counter')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to counter</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Colors')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to Colors</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Square')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to Square</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Text')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to Text</Text>
      </TouchableOpacity>

    </View>
  )
  ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  navTouchable: {
    backgroundColor: '#76448A',
    marginTop: '6%',
  },
  navText: {
    fontSize: 18,
    textAlign: "center",
    color: 'white',
    marginVertical: 4
  }
});

export default HomeScreen;
