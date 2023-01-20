import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function AddButton(props) {
  return (
    <View>
      <Button title={props.content} onPress={props.onPress} color={props.color} />
    </View>
  )
}