import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
const UserInfo = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.dashboardText}>SASO</Text>
            <Text style={styles.dashboardWelcomeText}>Welcome</Text>
            <View style={styles.userDescription}>
                <Text style={styles.userInfoLeft}>Surname</Text>
                <Text style={styles.userInfoRight}>: Spataka</Text>
            </View>
            <View style={styles.userDescription}>
                <Text style={styles.userInfoLeft}>Email</Text>
                <Text style={styles.userInfoRight}>: 214578@tut4life.ac.za</Text>
            </View>
            <View style={styles.userDescription}>
                <Text style={styles.userInfoLeft}>Campus</Text>
                <Text style={styles.userInfoRight}>: Soshanguve</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    dashboardText: {
        textAlign: 'center',
        fontSize: 30
    },
    dashboardWelcomeText: {
        fontSize: 20,
        fontWeight: '500'
    },
    userInfoLeft: {
        width: '20%',
        fontSize: 15,
        fontWeight: '500'
    },
    userInfoRight: {
        fontSize: 15,
        fontWeight: '500'
    },
    userDescription: {
        display: 'flex',
        flexDirection: 'row',
    },
})
export default UserInfo;