import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    
    return ( 
        <ScrollView>
            <View>
            <Text style={[{color: `${color}`}, styles.titlesStyle]}>{color}</Text>
            <TouchableOpacity                 
                style={styles.btnTouchable}  
                onPress={() => onIncrease()}
            >
                <Text
                style={styles.btnText}
                >More {color}</Text>
            </TouchableOpacity>
            <TouchableOpacity                 
                style={styles.btnTouchable}  
                onPress={() => onDecrease()}
            >
                <Text
                style={styles.btnText}
                >Less {color}</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    btnTouchable: {
        backgroundColor: '#85929E',
        marginTop: '6%',
        marginHorizontal: '20%',
        borderRadius: 10,
        marginBottom: 25        
      },
      btnText: {
        fontSize: 18,
        textAlign: "center",
        color: 'white',
        marginVertical: 4,
      },
      titlesStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center'
      }
})
export default ColorCounter;