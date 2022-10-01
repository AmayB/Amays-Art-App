import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Info extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Info</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Vincent Van Gogh
          </Text>

          <Image
            source={require('../assets/vangogh.jpg')}
            style={{
              width: '50%',
              height: '50%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}></Image>

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Vincent Willem van Gogh was a Dutch Post-Impressionist painter who
            posthumously became one of the most famous and influential figures
            in the history of Western art. In a decade, he created about 2,100
            artworks, including around 860 oil paintings, most of which date
            from the last two years of his life.
          </Text>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Leonardo da Vinci
          </Text>

          <Image
            source={require('../assets/leonardodavinci.jpg')}
            style={{
              width: '50%',
              height: '50%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}></Image>

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Leonardo di ser Piero da Vinci was an Italian polymath of the High
            Renaissance who was active as a painter, draughtsman, engineer,
            scientist, theorist, sculptor, and architect.
          </Text>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Pablo Picasso
          </Text>

          <Image
            source={require('../assets/pablopicasso.jpg')}
            style={{
              width: '50%',
              height: '50%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}></Image>

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker,
            ceramicist and theatre designer who spent most of his adult life in
            France.
          </Text>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Salvador Dalí
          </Text>

          <Image
            source={require('../assets/salvador.jpg')}
            style={{
              width: '50%',
              height: '50%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}></Image>

          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
              margin: 20,
            }}>
            Salvador Domingo Felipe Jacinto Dalí i Domènech, Marquess of Dalí of
            Púbol gcYC was a Spanish surrealist artist renowned for his
            technical skill, precise draftsmanship, and the striking and bizarre
            images in his work. Born in Figueres, Catalonia, Spain, Dalí
            received his formal education in fine arts in Madrid.
          </Text>
        </View>

        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
            <Text style={{marginTop: 50, fontFamily: 'Comic Sans MS, Comic Sans, cursive'}}>App by Amay Bhardwaj</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    margin: 20,
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'black',
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontSize: RFValue(28),
  },
  container: {
    marginTop: 30,
    backgroundColor: 'black',
    height: '60%',
    borderRadius: RFValue(20),
  },
});
