import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import New from '../components/New';

export default function Home(){
    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#FFF' }}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name='search' size={24} color="black"/>
                    <TextInput
                        placeholder="O que está procurando?"
                        style={styles.input}
                    />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizonal: 15 }}>
                <New
                    cover={require('../assets/casa-1.jpeg')}
                    name="Rep Avenida"
                    description="República da galera da medicina."
                    onPress={() => navigation.navigate('detail')}
                />
                <New
                    cover={require('../assets/casa-2.jpg')}
                    name="Rep Barril"
                    description="Rep da locurada, so a rapaziada firmeza."
                    
                    onPress={() => {}}
                />
                <New
                    cover={require('../assets/casa-3.jpg')}
                    name="Rep Arame"
                    description="So a galera gente boa, tudo misto."
                    onPress={() => {}}
                />
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title:{
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }

});