import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import CommentSection from './CommentSection'

export default function Details(props) {

    console.log(props.movie)
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>{props.movie.title}</Text>
            <Text style={styles.content}>{props.movie.synopsis}</Text>

            <CommentSection comments={props.movie.comments}/>
            <View style={styles.returnButton}>
                <Button title='Back to list' onPress={() => props.onCloseDetails()} />
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        marginLeft: 10,
        marginRight: 10,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 24
    },
    content:{
        textAlign: "justify",
        marginLeft: 10
    },
    returnButton:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        marginTop: 10
    },
})