import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

export default function controller() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialIcons name="skip-previous" size={45} />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="pause" size={45} />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="skip-next" size={45} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})