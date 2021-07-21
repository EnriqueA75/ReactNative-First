import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
const ImageDetail = ({text, image, imageScore}) => {
    return ( 
        <View>
            <Image 
                source={image} 
                style={styles.imageStyles}
            />
            <Text style={styles.titleStyle}>{text}</Text>
            <Text style={styles.subtextStyle}>Image Score - {imageScore}</Text>
        </View>
     );
}
const styles =  StyleSheet.create({
    imageStyles: {
        width: '100%',
        marginTop: 20
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtextStyle: {
        fontSize: 16
    }
})
export default ImageDetail;