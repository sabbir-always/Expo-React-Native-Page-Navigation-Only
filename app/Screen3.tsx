import React from 'react'
import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Screen3() {
    const route = useRouter()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen No 3</Text>
            <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                <Button title="Go Back" onPress={() => route.back()} />
                <Button title="Screen 1" onPress={() => route.push('/Screen1')} />
                <Button title="Screen 2" onPress={() => route.push('/Screen2')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})