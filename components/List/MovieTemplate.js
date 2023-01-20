import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import EditMovie from '../Edit/EditMovie'

export default function MovieTemplate(props) {

    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    console.log(isEditModalVisible);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onMoviePress}>
                <Image source={{ uri: props.movie.image }} />
                <View style={{ flexShrink: 1 }}>
                    <Text style={styles.bold}>{props.movie.title}</Text>
                    <Text numberOfLines={7} style={styles.normal}>{props.movie.synopsis}</Text>
                </View>


                <View style={styles.rightButtons}>
                    <TouchableOpacity style={[styles.rightButtonsTouchable, { backgroundColor: '#0af' }]} onPress={() => setIsEditModalVisible(true)}>
                        <Text style={{ color: '#000', textAlign: 'center' }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rightButtonsTouchable, { backgroundColor: '#f00' }]} onPress={() => props.onDeleteConfirmed(props.movie)}>
                        <Text style={{ color: '#000', textAlign: 'center' }}>Delete</Text>
                    </TouchableOpacity>
                </View>
                {isEditModalVisible && (
                    <EditMovie isVisible={isEditModalVisible} onClose={() => setIsEditModalVisible(false)} movie={props.movie} onEditConfirmed={props.onEditConfirmed} />
                )}

            </TouchableOpacity>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        maxHeight: 300,
        padding: 10,
        width: '90%',
        shadowColor: "#555",
        shadowOffset: {
            width: -3,
            height: 3,
        },
        marginTop: 30,
        shadowOpacity: 0.38,
        shadowRadius: 2.00,

        elevation: 24,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 4
    },
    normal: {
        fontSize: 12,
        flex: 1,
        flexWrap: "wrap",
        textAlign: "justify"
    },
    rightButtons: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: 'column',
    },
    rightButtonsTouchable: {
        borderRadius: 4,
        padding: 3,
        margin: 3,
    }
})