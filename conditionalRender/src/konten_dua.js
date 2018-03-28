// Function based component
import React, { Component } from 'react'
import { View, Text } from 'react-native'

const KontenDua = (objectData) => {
    console.log(objectData)
    return (
        <View>
            <Text style={{ fontSize: 25 }}>ini adalah {objectData.data} </Text>
        </View>
    )
}

export default KontenDua