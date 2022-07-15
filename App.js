import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {

  return (
    <>
      <ScrollView >
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.tittle}> Que hacer en Paris</Text>
          <ScrollView
            horizontal
          >
            <View >
              <Image style={styles.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View >
              <Image style={styles.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View >
              <Image style={styles.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View >
              <Image style={styles.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View >
              <Image style={styles.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.tittle}> Los mejores alojamientos</Text>
          <View>
            <View >
              <Image style={styles.destinos}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View >
              <Image style={styles.destinos}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View >
              <Image style={styles.destinos}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>
          <Text style={styles.tittle}> Hospedajes</Text>
          <View>
            <View style={styles.row}>
              <Image style={styles.hospedaje}
                source={require('./assets/img/hospedaje1.jpg')}
              />
              <Image style={styles.hospedaje}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.row}>
              <Image style={styles.hospedaje}
                source={require('./assets/img/hospedaje3.jpg')}
              />
              <Image style={styles.hospedaje}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  tittle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,

  },
  container: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  destinos: {
    width: '100%',
    height: 200,
    marginVertical: 5,

  },
  row:{
    flexDirection:'row',
     justifyContent: 'space-around',
  },
  hospedaje:{
    width: '50%',
    height: 180
  }
});

export default App;
