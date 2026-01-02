import React from 'react'
import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Screen1() {
    const route = useRouter()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen No 1</Text>
            <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                <Button title="Screen 2" onPress={() => route.push('/Screen2')} />
                <Button title="Screen 3" onPress={() => route.push('/Screen3')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})