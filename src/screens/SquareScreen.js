import React, { useReducer } from 'react';
import ColorCounter from '../components/ColorCounter';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'red':
        return (state.red + action.payload > 255 || state.red + action.payload < 0) 
        ? state 
        : {...state, red: state.red + action.payload}

        case 'green': 
        return (state.green + action.payload > 255 || state.green + action.payload < 0) 
        ? state 
        : {...state, green: state.green + action.payload}
        case 'blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) 
            ? state 
            : {...state, blue: state.blue + action.payload}
        default: 
            return state;
    }
}

const SquareScreen = () => {
    const COLOR_INCREMENT = 14

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state
    return ( 
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'red', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({type: 'red', payload: -1 * COLOR_INCREMENT})}
                color={'red'}/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'green', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({type: 'green', payload: -1 * COLOR_INCREMENT})}
                color={'green'}/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'blue', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({type: 'blue', payload: -1 * COLOR_INCREMENT})}
                color={'blue'}
            />
            
            <View style={{height: 150, width: '100%', backgroundColor: `rgb(${red},${green},${blue})`, alignSelf: 'center'}}/>
        </View>
     );
}

export default SquareScreen;