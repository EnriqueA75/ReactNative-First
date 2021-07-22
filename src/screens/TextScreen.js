import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, NativeEventEmitter } from 'react-native';

const TextScreen = () => {

    const [password, setPassword] = useState('')

    return ( 
        <View>
            <Text style={[{color: '#000', marginTop: 20},styles.nameText]}>Enter password</Text>
            <TextInput 
                placeholder="Your password"
                style={styles.nameInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? <Text style={styles.validationText}>Password must be 4 characters</Text> : null}
            {password.length > 4 ? 
            (
                <View style={styles.validationStyle}>
                    <Text style={styles.validationText}>Password must be no longer than 5 characters</Text>
                </View>
            ) : null}
            {password.length > 5 ? null : <Text style={[{color: '#616A6B'}, styles.nameText]}>Your password is: {password}</Text>}            
        </View>         
     );
}
 const styles = StyleSheet.create({
    nameInput: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
        marginTop: 20,
        borderColor: '#F5B7B1',
        borderWidth: 1,
        marginHorizontal: '10%',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 15
    },
    validationStyle: {
        backgroundColor: '#CB4335',
        alignSelf: 'center',
        height: 30,
        borderRadius: 7,
        justifyContent: 'center'
    },
    validationText: {
        fontSize: 18,
        color: '#95A5A6',
        fontWeight: 'bold'
    }
 })
export default TextScreen;