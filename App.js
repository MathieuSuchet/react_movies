import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AddButton from './components/Add/AddButton';
import { useEffect, useState } from 'react';
import MovieModal from './components/Add/MovieModal';
import ListMovies from './components/List/ListMovies';
import Movie from './model/Movie'
import Navigator from './components/Navigator';
import About from './components/About/About';
import Fire from './Fire';

export default function App() {

  const tabs = ["List", "About"]

  const [selectedTab, setSelectedTab] = useState("List");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firebase = new Fire()
    firebase.getMovies(
      (movies) => {
        setMovies(movies);
        setLoading(false);
      }
    )
  }, [])

  const firebase = new Fire()

  const addMovie = (newMovie) => {

    firebase.addMovie(newMovie)

    firebase.getMovies(
      (movies) => {
        setMovies(movies);
      }
    )
  }

  const editMovie = (oldMovie, newMovie) => {
    let oldM = movies[movies.indexOf(oldMovie)];
    oldM.name = newMovie.name;
    oldM.synopsis = newMovie.synopsis;

    firebase.updateMovie(newMovie.toJson())

    firebase.getMovies(
      (movies) => {
        setMovies(movies);
      }
    )
  }

  const deleteMovie = (deletedMovie) => {

    firebase.deleteMovie(deletedMovie.toJson())
    firebase.getMovies(
      (movies) => {
        setMovies(movies);
      }
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Navigator onSelectedTabChanged={setSelectedTab} />
      </View>

      <View>

        {(selectedTab == tabs[0]) &&
          <>
            <View >
            {((!loading )&& <>
              <ListMovies movies={movies} onEditConfirmed={editMovie} onDeleteConfirmed={deleteMovie} onPress={() => setIsModalVisible(true)} />
            </>)}
            {(loading && <ActivityIndicator/>)}
            </View>
            
            <MovieModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} style={{ width: '90%' }} onAddMovie={addMovie} />
          </>}
        {selectedTab == tabs[1] && <About />}
      </View>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  textBold: {
    fontWeight: 'bold',
    color: '#55f'
  },
  addButton: {
    marginTop: 10,
  }

});
