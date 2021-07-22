import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    const handleIncrease = () => {
        setCounter(counter+1)
    }
    const handleDecrease = () => {
        setCounter(counter-1)
    }
    return ( 
        <View  style={styles.containerStyles}  >

        <TouchableOpacity 
            onPress={() => handleIncrease()}
            style={styles.btnTouchable}  
        >
            <Text
            style={styles.btnText}
            >Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => handleDecrease()}
            style={styles.btnTouchable}  
        >
        <Text
          style={styles.btnText}
        >Decrease</Text>
        </TouchableOpacity>

        <Text style={styles.staticText}>Current Count</Text>
        <Text style={[{color: '#E74C3C'}, styles.counterStyle]}>{counter}</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    btnTouchable: {
        backgroundColor: '#85929E',
        marginTop: '6%',
        marginHorizontal: '20%',
        borderRadius: 10
      },
      btnText: {
        fontSize: 18,
        textAlign: "center",
        color: 'white',
        marginVertical: 4,
      },
      staticText: {
          textAlign: 'center',
          marginTop: 40
      },
      counterStyle: {
          textAlign: 'center',
          fontSize: 54,
          fontWeight: 'bold'
      }
})

export default CounterScreen;