import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OvulationCircle from './movingCircle/OvulationCircle'
import tw from '../lib/tailwind'
import Header from '../component/Header'

type Props = {}

const Today = (props: Props) => {
  return (
    <ScrollView contentContainerStyle={tw`bg-black`}>
      <OvulationCircle />
  <StatusBar translucent={false}/>
    </ScrollView>
  )
}

export default Today

const styles = StyleSheet.create({})