import React, { useState } from 'react';
import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';

const Message = () => {
    const navigation = useNavigation();

    const Messages = [{ id: 1, name: 'Buti', receiver: 'tutor' }, { id: 2, name: 'Joel', receiver: 'tutor' }]
    const [Search, setSearch] = useState('');

    function searchFunction(text) {
        console.log(text)
    }

    function openChat(chat){
       // console.log(chat);
        navigation.navigate('messaging', {data:chat})

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

                    <Text style={styles.pageText}>Private Message</Text>

                    <SearchBar
                        placeholder="Search Here..."
                        lightTheme
                        round
                        value={Search}
                        onChangeText={(text) => searchFunction(text)}
                        autoCorrect={false}
                        style={{borderRadius:12}}
                    
                    />
                    <View style={{marginTop:15}}>
                        {Messages.map((message, xid) => (
                            <View key={message.id} style={styles.messageBtn}>
                                <Pressable style={styles.btnName} onPress={() =>openChat(message)}>
                                    <Text style={{ backgroundColor: 'green', height: 7, width: 7, borderRadius: 100, margin: 8 }}></Text>
                                    <Text >{message.name}</Text>
                                </Pressable>
                                <Text style={{ backgroundColor: '#D3D3D3', marginTop: 10, paddingLeft: 5, paddingRight: 5, borderRadius: 15 }}>{message.receiver}</Text>
                            </View>
                        ))}
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
    messageBtn: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    ,
    btnName: {
        flexDirection: 'row',

    }

})

export default Message;