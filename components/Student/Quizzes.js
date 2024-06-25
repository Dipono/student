import React, { useState } from 'react';
import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import ProgressBarMultiStep from "react-native-progress-bar-multi-step";
import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';

const ExclusionStatus = () => {
    const navigation = useNavigation();


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

                    <Text style={styles.pageText}>Available Tests</Text>
                    <View style={styles.quizzescontainer}>
                        <View style={styles.quizzcontainer}>
                            <Text style={styles.quizzcontainerText}><Text style={{fontWeight:'500'}}>Test ID:</Text>Tutor test(TPG201)</Text>
                            <Text style={styles.quizzcontainerText}><Text style={{fontWeight:'500'}}>Description:</Text>Tutor test No 42</Text>
                            <Text style={styles.quizzcontainerText}><Text style={{fontWeight:'500'}}>Subject Code:</Text>TPG201</Text>
                            <Link to={{ screen: 'test', params: { id: 'jane' } }} style={{color:'blue', fontSize:15}}>start quize</Link>
                        </View>
                        <View style={styles.quizzcontainer}>
                            <Text style={styles.quizzcontainerText}><Text style={{fontWeight:'500'}}>Test ID:</Text>Tutor test(TPG201)</Text>
                            <Text style={styles.quizzcontainerText}><Text style={{fontWeight:'500'}}>Description:</Text>Tutor test No 42</Text>
                            <Text style={styles.quizzcontainerText}><Text style={{fontWeight:'500'}}>Subject Code:</Text>TPG201</Text>
                            <Link to={{ screen: 'test', params: { id: 'jane' } }} style={{color:'blue', fontSize:15}}>start quize</Link>
                        </View>
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
    quizzescontainer:{
        margin:10
    },
    quizzcontainer:{
        margin:10,
        borderColor:'grey',
        borderWidth:1,
        padding:5,
        borderRadius:5
    },
    quizzcontainerText:{
        marginTop:2
    },

})

export default ExclusionStatus;