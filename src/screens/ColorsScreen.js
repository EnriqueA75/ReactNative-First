import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native';

const ColorsScreen = () => {

    const [colors, setColors] = useState([])

    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        return `rgb(${red}, ${green}, ${blue})`
    }
    console.log(colors)

    return ( 
        <View>
            <TouchableOpacity                 
                style={styles.btnTouchable}  
            >
                <Text
                style={styles.btnText}
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
                >Add a color</Text>
            </TouchableOpacity>
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return(
                        <View style={{height:100, width:100, backgroundColor: item}}/>
                    )
                }}
            />
        </View>
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
})
export default ColorsScreen;