import React, { useState } from 'react';
import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';

const Account = () => {
    const navigation = useNavigation();

    const [User, setUser] = useState({ id: 1, studentNo: "21654987", email:"21654987@tut4life.ac.za",surname:"Joel", name: 'Buti', receiver: 'tutor' })

    const handlechanges = (event) => {
       // const { name, value } = event.target;
        console.log(event.target );
        console.log(event.text );
        console.log(event.eventCount );
        /* const { name, value } = event.target;
         setUser(prevState => ({
             ...prevState,
             [name]: value
         }));*/
    }
    function openChat(chat) {
        // console.log(chat);
        navigation.navigate('messaging', { data: chat })

    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.headerTopText}>SASO</Text>
                </View>
                <SideBar />
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.maincontainer}>
                    <UserInfo />

                    <Text style={styles.pageText}>Manage Profile</Text>
                    <View>
                        <Text>Student Number </Text>
                        <TextInput
                            style={styles.input}
                            value={User.studentNo}
                            name='User.studentNo'
                            onChange={handlechanges}
                        />
                    </View>
                    <View>
                        <Text>Student Email </Text>
                        <TextInput
                            style={styles.input}
                            value={User.email}
                            name='User.email'
                            onChangeText={handlechanges}
                        />
                    </View>
                    <View>
                        <Text>Surname </Text>
                        <TextInput
                            style={styles.input}
                            value={User.surname}
                            name='User.surname'
                            onChangeText={handlechanges}
                        />
                    </View>
                    <View>
                        <Text>Name </Text>
                        <TextInput
                            style={styles.input}
                            value={User.name}
                            name='User.name'
                            onChangeText={handlechanges}
                        />
                    </View>



                    <View style={styles.footer}>
                        <Footer />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        marginTop: 30,
        textAlign: 'center',
        flex: 1
    },
    footer: {
        marginTop: 10
    },
    headerTop: {
        backgroundColor: 'lightblue',

    },
    headerTopText: {
        marginLeft: 5,
        fontSize: 40
    },
    body: {
        flex: 1
    },

    maincontainer: {
        marginLeft: 15,
        marginRight: 15,

    },
    dashboardText: {
        textAlign: 'center',
        fontSize: 30
    },
    pageText: {
        margin: 10,
        fontSize: 20,
        fontWeight: '400'
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    }

})

export default Account;