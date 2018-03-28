// Class based component
import React, { Component } from 'react'
import { View, Text } from 'react-native'

class KontenSatu extends Component {
    render(){
        console.log(this.props)
        return (
            <View>
                <Text style={{ fontSize: 25 }}>ini adalah {this.props.data}</Text>
            </View>
        )
    }
}

export default KontenSatu