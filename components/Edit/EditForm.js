import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect } from 'react'

export default function EditForm(props) {

    useEffect(() => {
      props.onTitleChanged(props.title)
      props.onSynopsisChanged(props.title)
    
    }, [])
    

    return (
        <View>
            <Text style={{marginBottom: 10, fontWeight: 'bold', textAlign: 'center', fontSize: 30}}>Edit a movie :</Text>
            <View>
                <Text style={styles.labelStyle}>New movie name</Text>
                <TextInput onChangeText={(newTitle) => props.onTitleChanged(newTitle)} placeholder='Film name' defaultValue={props.title} style={[styles.input, { height: 40 }]} />
            </View>

            <View>
                <Text style={styles.labelStyle}>New synopsis</Text>
                <TextInput onChangeText={(newSynopsis) => props.onSynopsisChanged(newSynopsis)} multiline='true' placeholder='Synopsis' defaultValue={props.synopsis} style={[styles.input, { height: 120 }]}/>
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