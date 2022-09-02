import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/Colors'
import { sub } from 'react-native-reanimated'

function RoundButton(props){
    const sButton = props.transparent?mainStyles.roundTransparent:mainStyles.roundButton
    const sText = props.transparent?{color: color.BLACK}: null

    return(
        <TouchableOpacity style={[sButton, props.style]}
            onPress={props.onPress}>
        <Text style={[mainStyles.btntxt, sText]}>{props.titulo}</Text>
        </TouchableOpacity>
    )
}

export default RoundButton