import { View, Text, StyleSheet, Modal, Button } from 'react-native'
import React from 'react'
import EditForm from './EditForm'
import Movie from '../../model/Movie';
import { useState } from 'react'

export default function EditMovie(props) {

    const [title, setTitle] = useState(props.movie.name)
    const [synopsis, setSynopsis] = useState(props.movie.synopsis)

    const handleSumbit = (oldMovie, newMovie) => {
        props.onEditConfirmed(oldMovie, newMovie);
        props.onClose()
    }

    return (
        <Modal visible={props.isVisible}>
            <View style={styles.modalContainer} >
                <View style={{ marginTop: 10 }}>
                    <EditForm title={props.movie.title} synopsis={props.movie.synopsis} onTitleChanged={setTitle} onSynopsisChanged={setSynopsis} />
                </View>
                <View style={{ padding: 10, marginTop: 10, display: 'flex', flexDirection: "column" }}>
                    <View style={{ marginBottom: 10 }}>
                        <Button title='Submit' onPress={() => handleSumbit(props.movie, new Movie(props.movie.id, title, synopsis, props.movie.image, props.movie.comments))} />
                    </View>

                    <Button title="Close" onPress={() => props.onClose()} />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: '90%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
})