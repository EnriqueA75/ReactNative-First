import React from 'react';
import { Text, StyleSheet } from "react-native";

const Screen = () => {
    return ( 
        <Text style={styles.titleStyle}>Titulo de Screen Component</Text>
     );
}

const styles = StyleSheet.create({
    titleStyle: {
      fontSize: 30,
      color: 'red'
    }
});

export default Screen;