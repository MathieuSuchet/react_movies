import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

export default function Navigator(props) {

    const [selectedTab, setSelectedTab] = useState("List")

    const selectedTabChanged = (newTab) => {
        setSelectedTab(newTab)
        props.onSelectedTabChanged(newTab);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../icons/icon.png")} style={{ width: 50, height: 50, marginRight: 10 }} />
                <Text style={styles.title}>My movies</Text>
            </View>
            <View style={styles.buttonsView} >
                <TouchableOpacity style={[styles.inNavTouchableText, {backgroundColor: selectedTab == "List" ? "#4f4": "#afa", height: "100%"}]} onPress={() => selectedTabChanged("List")}>
                    <Text>List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.inNavTouchableText, {backgroundColor: selectedTab == "About" ? "#4f4": "#afa", height: "100%"}]} onPress={() => selectedTabChanged("About")}>
                    <Text>About</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        top: 0,
        flexDirection: 'column',
        backgroundColor: "#afa",
        width: '100%',
        marginTop:30
    },

    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },

    title: {
        textAlign: 'center',
        alignItems: 'center'
    },

    inNavTouchableText: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    }
})