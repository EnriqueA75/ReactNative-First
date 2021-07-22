import React, {useState} from 'react';
import ColorCounter from '../components/ColorCounter';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const SquareScreen = () => {
    const COLOR_INCREMENT = 14
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
    switch(color){
        case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
        case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change)
        return
        case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return
    }
}


    return ( 
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)} 
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
                red={red}
                color={'red'}/>
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
                green={green}
                color={'green'}/>
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} 
                blue={blue} 
                color={'blue'}
            />
            
            <View style={{height:100, width:350, backgroundColor: `rgb(${red},${green},${blue})`, alignSelf: 'center'}}/>
        </View>
     );
}

export default SquareScreen;