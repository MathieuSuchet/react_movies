import { View, Text, Modal, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MovieForm from './MovieForm'
import Movie from '../../model/Movie'

export default function MovieModal(props) {

    const [title, setTitle] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [image, setImage] = useState("")



    const handleSumbit = () => {
        props.onAddMovie({
            'title': title,
            'synopsis': synopsis,
            'image': image,
            'comments': []
        })
        props.onClose()
    }

    return (
        <Modal visible={props.isVisible}>
            <View style={styles.modalContainer} >
                <View style={{ marginTop: 10 }}>
                    <MovieForm title={title} synopsis={synopsis} handleTitleChanged={(newTitle) => setTitle(newTitle)} handleSynopsisChanged={(newSynopsis) => setSynopsis(newSynopsis)} handleImageChanged={(newImage) => setImage(newImage)}/>
                </View>
                <View style={{ padding: 10, marginTop: 10, display: 'flex', flexDirection: "column" }}>
                    <View style={{ marginBottom: 10 }}>
                        <Button title='Submit' onPress={() => handleSumbit()} />
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