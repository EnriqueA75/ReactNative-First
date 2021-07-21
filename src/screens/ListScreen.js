import React from 'react';
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        {name: 'Enrique', age: 20},
        {name: 'Diego', age: 45},
        {name: 'Vivian', age: 32},
        {name: 'Victoria', age: 27},
        {name: 'Milagro', age: 53},
        {name: 'Carlos', age: 30},
        {name: 'Emanuel', age: 76}
    ]

    return ( 
        <FlatList 
            showsHorizontalScrollIndicator={false}
            data={friends} 
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
            return (
                <View style={styles.listContainer}>
                    <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                </View>
            )

        }}/>
     );
     //in the id cases I prefeer to have an unique id in every single name, because the names could be repeated
     //i prefeer to have an ID and use <Text key={name.id}> </Text> 
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        textAlign: 'center'

    },
    listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        borderColor: '#717D7E',
        borderWidth: 1,
        marginHorizontal: '15%'
    }
})
export default ListScreen;