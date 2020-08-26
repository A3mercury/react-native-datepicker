import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import CustomDatePicker from './src/components/datepicker';

import moment from 'moment';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(moment('1989-09-05'));

    const saveData = () => {
        console.log(JSON.stringify({
            name: name,
            email: email,
            birthdate: birthdate,
        }));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ ...styles.inputWrapper, marginTop: 100 }}>
                <Text>First and Last Name</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => setName(val)}
                    placeholder='Bruce Wayne'
                    value={name}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Text>Email Address</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(val) => setEmail(val)}
                    placeholder='bwayne@thebatcave.com'
                    value={email}
                    autoCapitalize='none'
                />
            </View>

            <View style={styles.inputWrapper}>
                <Text>Birthdate</Text>
                <CustomDatePicker 
                    textStyle={styles.textInput}
                    defaultDate={birthdate}
                    onDateChange={(val) => setBirthdate(val)}
                />
            </View>

            <View style={styles.inputWrapper}>
                <Pressable 
                    style={styles.saveDetailsButton}
                    onPress={saveData}>
                    <Text style={styles.saveDetailsText}>
                        Save Details
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    textInput: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 1 
    },
    saveDetailsButton: {
        backgroundColor: 'green', 
        padding: 20, 
        alignItems: 'center',
    },
    saveDetailsText: {
        color: 'white',
        fontWeight: '700',
    },
});

export default App;
