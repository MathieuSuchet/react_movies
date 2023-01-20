import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'

export default function CommentSection(props) {

    const Comment = (comment) => (
        <>
            <View style={StyleSheet.container}>
                <Text style={styles.bold}>{comment.author}</Text>
                <Text style={styles.dateText}>{comment.date}</Text>
            </View>
            <Text style={styles.content}>{comment.content}</Text>
        </>
    )

    return (
        <View style={styles.sectionContainer}>
            {(props.comments === undefined || props.comments.length === 0) && <Text style={{color: '#0008'}}>This comment section is empty...</Text> }
            <FlatList>
                data={props.comment}
                renderItem={
                    ({comment}) => <Comment comment={comment}/>
                }
            </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    sectionContainer:{
        shadowColor: "#555",
        shadowOffset: {
            width: -3,
            height: 3,
        },
        shadowOpacity: 0.38,
        shadowRadius: 2.00,

        elevation: 24,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    bold:{
        fontWeight: 'bold',
        fontSize: 24
    },
    dateText: {
        fontSize: 10,
        marginLeft: 10
    },
    content: {
        fontSize: 14
    }

})