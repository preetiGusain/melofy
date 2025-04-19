import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import melofyBackgroundImage from "@/assets/images/background.png"
import songs from "../data/songs";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={melofyBackgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Melofy</Text>
        <Link style={styles.link} href="/explore">Explore</Link>
        <ScrollView contentContainerStyle={styles.songList}>
          {songs.map(song => (
            <View key={song.id} style={styles.songItem}>
              {/* Display artwork if available */}
              {song.artwork && (
                <Image source={song.artwork} style={styles.artwork} />
              )}
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    paddingTop: 60,
  },
  title: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  songList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  songArtist: {
    fontSize: 14,
    color: 'gray',
  },
});