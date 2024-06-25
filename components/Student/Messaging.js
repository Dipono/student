import React, { useState } from 'react';
import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';

const Messaging = ({ route }) => {
    const navigation = useNavigation();


    //const { data} = route.params;
    // console.log('data',data);
    const [Chats, setChats] = useState([
        { id: 1, user: "1", message: "I want to have session", date: '12/05/2024 12:20' },
        { id: 2, user: "2", message: "I will be free at 14:00", date: '12/05/2024 12:26' },
        { id: 3, user: "1", message: "I'm also free", date: '12/05/2024 12:30' },
        { id: 4, user: "2", message: "Sure", date: '12/05/2024 12:40' },
    ])
    const myInfo = { userId: '1', name: "joel" };
    const receiver = { name: "lethabo" }
    const [messageText, setmessageText] = useState('')
    function sendMessage() {
  
        
        var newMessage ={
            user: myInfo.userId,
            message: messageText
        }
      console.log(newMessage);
        
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

                    <View style={styles.chats}>
                        {Chats.map((chat, xid) => (
                            <View key={xid}>
                                {myInfo.userId === chat.user ?
                                    <View style={styles.sender}>
                                        <Text style={styles.senderIcon}>{myInfo.name.substring(0, 1).toLocaleUpperCase()}</Text>
                                        <Text style={styles.senderMessage}>{chat.message}</Text>
                                    </View>
                                    :
                                    <View style={styles.receiver}>
                                        <Text style={styles.receiverIcon}>{receiver.name.substring(0, 1).toLocaleUpperCase()}</Text>
                                        <Text style={styles.receiverMessage}>{chat.message}</Text>
                                    </View>
                                }
                            </View>
                        ))}
                    </View>

                </View>
            </ScrollView>
            <View style={styles.sendchat}>
                <TextInput
                    style={styles.input}
                    onChangeText={setmessageText}
                    value={messageText}
                />
                {messageText !== '' ?
                    <Pressable style={styles.sendchatbtn} onPress={() => sendMessage()}><Text>Send</Text></Pressable>
                    :
                    <Pressable style={styles.sendchatbtn} disabled onPress={() => sendMessage()}><Text>Send</Text></Pressable>
                }

            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
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
    chats: {
        backgroundColor: '#E5E4E2',
    },
    sender: {
        marginLeft: 50,
        marginTop: 10,
        textAlign: 'right',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    senderIcon: {
        backgroundColor: '#708090',
        padding: 5,
        height: 30,
        width: 30,
        textAlign: 'center',
        borderRadius: 100
    },
    senderMessage: {
        backgroundColor: '#708090',
        borderRadius: 10,
        marginLeft: 2,
        padding: 5
    },
    receiver: {
        marginRight: 50,
        marginTop: 10,
        flexDirection: 'row',
    },
    receiverIcon: {
        backgroundColor: 'grey',
        padding: 5,
        height: 30,
        width: 30,
        textAlign: 'center',
        borderRadius: 100
    },
    receiverMessage: {
        backgroundColor: 'grey',
        borderRadius: 10,
        marginLeft: 2,
        padding: 5
    },
    name: {
        flexDirection: 'row'
    },
    sendchat: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 12
    },
    sendchatbtn: {
        justifyContent: 'center',
        textAlign: 'right',
        backgroundColor: '#7393B3',
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 12

    }

})

export default Messaging;