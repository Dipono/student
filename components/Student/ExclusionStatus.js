import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ProgressBarMultiStep from "react-native-progress-bar-multi-step";
import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';

const ExclusionStatus = () => {
    const navigation = useNavigation();

    const tabs = [
        // { title: 'Personal', pageNo: 1 },
        // { title: 'Address', pageNo: 2 },
        { title: 'Studentbio \n not updated', pageNo: 1 },
        { title: 'Faculty \nApproval', pageNo: 2 },
        { title: "Registra's \n approval", pageNo: 3 },
        { title: 'Block not \nlifted', pageNo: 4 }
    ];


    const [step, setStep] = useState(0);
    const [page, setPage] = useState(2);
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

                    <View style={styles.excluStatus}>
                    </View>
                    <View style={{ textAlign: 'center' }}>
                        <ProgressBarMultiStep
                            progressive={true}
                            page={page}
                            tabs={tabs}
                            circleStyle={{ width: 30, height: 30 }}
                            lineStyle={{ width: 20, height: 5 }}
                            containerStyle={{ marginHorizontal: 0 }}
                        />
                    </View>

                    <View style={styles.excluStatus}>
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

    excluStatus:{
        backgroundColor:'blue',
        padding:20,
    }

})

export default ExclusionStatus;