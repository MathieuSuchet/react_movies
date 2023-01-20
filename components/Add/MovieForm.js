import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function MovieForm(props) {
    return (
        <View>
            <Text style={{marginBottom: 10, fontWeight: 'bold', textAlign: 'center', fontSize: 30}}>Add a movie :</Text>
            <View>
                <Text style={styles.labelStyle}>Movie name</Text>
                <TextInput onChangeText={props.handleTitleChanged} placeholder='Movie name' value={props.title} style={[styles.input, { height: 40 }]} />
            </View>

            <View>
                <Text style={styles.labelStyle}>Movie synopsis</Text>
                <TextInput multiline={true} placeholder='Synopsis' value={props.synopsis} style={[styles.input, { height: 120 }]} onChangeText={props.handleSynopsisChanged} />
            </View>

            <View>
                <Text style={styles.labelStyle}>Image URL</Text>
                <TextInput placeholder='Image URL' value={props.image} style={[styles.input]} onChangeText={props.handleImageChanged}/>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
        borderColor: "black",
        marginTop: 10,
    },
    labelStyle: {
        marginBottom: 2,
        marginTop: 20,
        textAlign: "center"
    }
})