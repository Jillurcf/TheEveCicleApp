import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconCross } from '../assets/Icons'

type Props = {}

const AddNotes = ({navigation}) => {
  return (
    <View style={tw`flex-1 bg-[#E8F6F6] p-[4%]`}>
       <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Add notes</Text>
                <View></View>
            </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({})