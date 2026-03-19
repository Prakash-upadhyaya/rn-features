import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

type Params = {
    value: string,
    onChangeText: any,
    isPassword?: boolean
}

const CustomInput: React.FC<Params> = ({value, onChangeText, isPassword}) => {

  return (
    <View>
      <TextInput testID='custom-input' value={value} style={styles.input} onChangeText={onChangeText}  secureTextEntry={isPassword} />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: COLORS.black,
        padding:10,
        color: COLORS.black
    }
})