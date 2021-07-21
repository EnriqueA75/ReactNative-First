import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({navigation}) => {

  const [numero, setNumero] = useState(1)

  const sumarNumero = () => {
    setNumero(numero+1)
  }

  return (
    <View>
      <Text style={styles.text}>Numero de Clicks: {numero}</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Screen')}
      />
      <TouchableOpacity 
        onPress={() => navigation.navigate('List')}
        style={styles.navTouchable}  
      >
        <Text
          style={styles.navText}
        > Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
  ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20
  },
  navTouchable: {
    backgroundColor: '#5499C7',
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
