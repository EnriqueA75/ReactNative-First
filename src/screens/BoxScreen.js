import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const BoxScreen = () => {
    return ( 
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
     );
}
 
const styles = StyleSheet.create({
   viewStyle: {
       borderWidth: 1,
       borderColor: 'black',
       height: 200,
       flexDirection: 'row',
       justifyContent: 'space-between'
   },
   textOneStyle: {
       borderWidth: 1,
       borderColor: 'red',
       backgroundColor: '#CB4335',
       height: 50,
       width: 50
   }, 
   textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#2ECC71',
        height: 50,
        width: 50,
        alignSelf: 'flex-end'
    }, 
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#A569BD',
        height: 50,
        width: 50
    } 
})
export default BoxScreen;