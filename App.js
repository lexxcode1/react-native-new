import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {

    const [people, setPeople] = useState([
        {name: 'shaun', key: '1'},
        {name: 'jay', key: '2'},
        {name: 'steph', key: '3'},
        {name: 'steve', key: '4'},
        {name: 'ian', key: '5'},
        {name: 'gerlad', key: '6'},
        {name: 'afag', key: '7'},
    ])
    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map(value =>
                    (
                        <View key={value.key}>
                            <Text style={styles.item}>{value.name}</Text>
                        </View>
                    )
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20

    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }


});
