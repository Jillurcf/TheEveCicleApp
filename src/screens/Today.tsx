import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OvulationCircle from './movingCircle/OvulationCircle'
import tw from '../lib/tailwind'

type Props = {}

const Today = (props: Props) => {
  return (
    <ScrollView contentContainerStyle={tw``}>
      <OvulationCircle />
      <OvulationCircle />
    </ScrollView>
  )
}

export default Today

const styles = StyleSheet.create({})