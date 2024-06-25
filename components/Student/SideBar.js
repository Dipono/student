import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { useNavigation, Link, NavigationContainer } from "@react-navigation/native";

export default function SideBar() {
    const navigation = useNavigation();

    const studentURL = 'https://tut4life.tut.ac.za/';
    const [IsVissible, setIsVissible] = useState(0);
    const [IsVissibleHeight, setIsVissibleHeight] = useState(0);
    const OpenMenuBar = () => {
        if (IsVissible === 0) {
            setIsVissible(100)
            setIsVissibleHeight(70);
        }
        else {
            setIsVissible(0)
            setIsVissibleHeight(0)
        }
    }

    const navigatePages = (page) => {
        if (page === "login") {

            //return
        }
        else if(page === "student_account"){

            return OpenURL();
        }
        console.log(page);
        OpenMenuBar();
        navigation.navigate(page);
    }

    OpenURL = async()=>{
        var support = await Linking.canOpenURL(studentURL);
        if(support){
            await Linking.openURL(studentURL);
        }
        else{
            console.log("url is no supported");

        }
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={() => OpenMenuBar()}>
                {IsVissible === 0 ? <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://img.icons8.com/ios-filled/50/menu--v1.png',
                    }}
                /> :

                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://img.icons8.com/ios-filled/50/delete-sign--v1.png',
                        }}
                    />
                }


            </Pressable>

            <View style={{ opacity: IsVissible, height: `${IsVissibleHeight}%` }}>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("student_dash")}><Text style={styles.navListText}>Dashboard</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("student_exclusion_status")}><Text style={styles.navListText}>Exclusion Status</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("#")}><Text style={styles.navListText}>#</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    
                    <Pressable onPress={() => navigatePages("student_account")}><Text style={styles.navListText}>Student Account</Text></Pressable> 
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("quizzes")}><Text style={styles.navListText}>Quizzes</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("noticeboard")}><Text style={styles.navListText}>NoticeBoard</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("message")}><Text style={styles.navListText}>Message</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("#")}><Text style={styles.navListText}>Urgent Matter</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("account")}><Text style={styles.navListText}>Account</Text></Pressable>
                </View>
                <View style={styles.navList}>
                    <Pressable onPress={() => navigatePages("login")}><Text style={styles.navListText}>Logout</Text></Pressable>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "#c0c0c0",
        width: "100%",
        backgroundColor: '#000080',
    },
    navList: {
        color: "#c0c0c0",
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        margin: 10
    },
    navListText: {
        color: "#c0c0c0",
    },

    tinyLogo: {
        width: 30,
        height: 30,
    },

})