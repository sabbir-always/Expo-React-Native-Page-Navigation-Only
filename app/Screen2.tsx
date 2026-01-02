import React from 'react'
import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Screen2() {
    const route = useRouter()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen No 2</Text>
            <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                <Button title="Go Back" onPress={() => route.back()} />
                <Button title="Screen 1" onPress={() => route.push('/Screen1')} />
                <Button title="Screen 3" onPress={() => route.push('/Screen3')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})