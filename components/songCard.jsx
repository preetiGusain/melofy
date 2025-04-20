import { View, Text, SafeAreaView, Image, FlatList, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import songs from '../data/songs'
import Animated from 'react-native-reanimated'


const { width, height } = Dimensions.get("window")

export default function songCard() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0)

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            const index = Math.round(value / width)
            setIndex(index);
            console.log("index: ", index);
        });
    }, []);

    const renderItem = ({ item }) => {
        return (
            <view styles={styles.imageContainer}>
                <Image style={StyleSheet.image} source={item.Image} />
            </view>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: 320 }}>
                <FlatList
                    data={songs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />
            </SafeAreaView>
            <View>
                <Text style={styles.title}>{songs[index].title}</Text>
                <Text style={styles.artist}>{songs[index].artist}</Text>
            </View>
            <Controller/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        height: height,
        maxHeight: 500,
    },
    image: {
        width: 320,
        height: 320,
    },
    imageContainer: {
        width: width,
        alignItems: "center",
    },
    title: {
        fontSize: 26,
        textAlign: "center",
        textTransform: "capitalize"
    },
    artist: {
        fontSize: 18,
        textAlign: "center",
    }
})