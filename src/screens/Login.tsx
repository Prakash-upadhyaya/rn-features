import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import CustomInput from '../components/CustomInput'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
    <View style={styles.main}>
      <CustomInput value={email} onChangeText={setEmail} />
      <CustomInput value={password} onChangeText={setPassword} isPassword={true} />

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  btnView:{ alignItems: "center", margin: 10 },
  btnContainer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    color: COLORS.white
  }
})