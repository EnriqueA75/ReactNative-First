import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const Screen = () => {

    const personName = 'Enrique'

    return ( 
        <View>
            <Text style={styles.titleStyle}>Getting Started with React Native!</Text>
            <Text style={styles.secondText}>My name is {personName}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    titleStyle: {
      fontSize: 45,
    },
    secondText: {
        fontSize: 20
    }
});

export default Screen;