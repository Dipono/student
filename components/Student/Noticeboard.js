import React, { useState } from 'react';
import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';

import SideBar from './SideBar';
import UserInfo from '../UserInfo';
import Footer from '../Footer';

const Noticeboard = () => {
    const navigation = useNavigation();
    const [page, setPage] = useState(0);
    const itemsPerPage = 1;
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;
    tableHead = ["#", "Title", "Notice", "Date"]
    tableData = [
        { id: "1", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "2", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "3", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "4", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "5", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "6", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "7", tile: "No School", notice: "No School", date: "12/02/2024" },
        { id: "8", tile: "No School", notice: "No School", date: "12/02/2024" },
    ]
    tablerow = [["1", "No School", "No School", "12/02/2024"], ["2", "No School", "No School", "12/02/2024"], ["3", "No School", "No School", "12/02/2024"],]
    const items = [
        {
            key: 1,
            name: 'Page 1',
        },
        {
            key: 2,
            name: 'Page 2',
        },
        {
            key: 3,
            name: 'Page 3',
        },
    ];

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
                    <Text style={styles.pageText}>Noticeboard</Text>

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={tableHead} flexArr={[1, 2, 2, 2]} style={styles.head} />

                        <Rows data={tablerow} flexArr={[1, 2, 2, 2]} style={styles.text} />
                    </Table>
                    <DataTable>
                        <DataTable.Pagination
                            page={page}
                            numberOfPages={Math.floor(tablerow.length / itemsPerPage)}
                            onPageChange={page => setPage(page)}
                            label={`${from + 1}-${to} of ${tablerow.length}`}
                        />
                    </DataTable>
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

    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 5 }
})

export default Noticeboard;