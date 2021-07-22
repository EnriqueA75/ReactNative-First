import React, { useReducer } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
           return {...state, counter: state.counter + action.payload}
        case 'decrease':
            return (state.counter <= 0) ? state :  {...state, counter: state.counter + action.payload}
        default: 
            return state;
    }
}


const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const { counter } = state

    return ( 
        <View  style={styles.containerStyles}  >

        <TouchableOpacity 
            onPress={() => dispatch({type: 'increase', payload: 1})}
            style={styles.btnTouchable}  
        >
            <Text
            style={styles.btnText}
            >Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => dispatch({type: 'decrease', payload: -1})}
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