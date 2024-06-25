import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';
const StudentDash = () => {
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
                    <View style={styles.summarycontainer}>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Reason for probation/exclusion</Text>
                            <Text >TPG failed</Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Subject(s) supported</Text>
                            <Text>TPG failed</Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Assigned tutors</Text>
                            <Text>Thobejane TPG </Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Tutorial sessions attended</Text>
                            <Text>Tutorial sessions conducted</Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Tutorial quizzes</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Studython attendance</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Lecturer class attendance</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Written assessment</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>SDS referral</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.summarycard}>
                            <Text style={styles.summarycardHeadingText}>Overall student progress report (1st semester 2023)</Text>
                            <Text>Tutorial Session</Text>
                            <Text>Studython</Text>
                            <Text>Lecture class attendance</Text>
                            <Text>Tutor quizzes</Text>
                            <Text>Lecture quizzes</Text>
                        </View>
                    </View>
                    <Text>2024</Text>
                    <View style={styles.footer}>
                        <Footer />
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>

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


    summarycontainer: {

    },
    summarycard: {
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 8,
        marginTop: 8
    },
    summarycardHeadingText: {
        color: 'white',
        fontSize: 15
    }

})
export default StudentDash;