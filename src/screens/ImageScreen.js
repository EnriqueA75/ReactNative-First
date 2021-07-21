import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return ( 
        <View>
            <ImageDetail text="Forest" image={require('../../assets/beach.jpg')} imageScore={'9'}/>
            <ImageDetail text="Beach" image={require('../../assets/forest.jpg')} imageScore={'7'}/>
            <ImageDetail text="Summer" image={require('../../assets/mountain.jpg')} imageScore={'4'}/>
        </View>
     );
}
const styles =  StyleSheet.create({

})
export default ImageScreen;