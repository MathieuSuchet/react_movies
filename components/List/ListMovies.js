import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import MovieTemplate from './MovieTemplate'
import Details from '../Details';
import AddButton from '../Add/AddButton';


export default function ListMovies(props) {

    const [currentMovie, setCurrentMovie] = useState(undefined)

    return (
        <View>
            {currentMovie === undefined &&
                <>
                    <View style={{ alignItems: 'flex-start', padding: 10 }}>
                        <AddButton content="Add a movie" onPress={() => props.onPress()} color='dodgerblue' />
                    </View>
                    <FlatList
                        data={props.movies}
                        renderItem={({ item }) => (
                            <MovieTemplate
                                movie={item}
                                onEditConfirmed={props.onEditConfirmed}
                                onDeleteConfirmed={props.onDeleteConfirmed}
                                onMoviePress={() => setCurrentMovie(item)}
                            />
                        )
                        }
                    />
                </>}
            {currentMovie !== undefined && <Details movie={currentMovie} onCloseDetails={() => setCurrentMovie(undefined)} />}
        </View>
    )
}