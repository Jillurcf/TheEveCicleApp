import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconCross } from '../assets/Icons'
import { TextArea } from 'react-native-ui-lib'
import TButton from '../component/TButton'

type Props = {}

const AddNotes = ({ navigation }) => {
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
      <Text style={tw`mt-8 text-lg text-black font-SatoshiBold`}>My notes</Text>
      <View style={tw`w-full rounded-lg h-50 bg-white my-4`} >

        <TextArea
          color="black"
          textcolor="black"
          placeholder="Add your notes here..."
          placeholderTextColor="#A0A0A0"
          style={tw`w-full h-full bg-white rounded-lg p-4`}
          textAlignVertical="top"
          numberOfLines={10}
          multiline={true}
          textStyle={{ minHeight: 100 }}
          autoCorrect={false}
          autoCapitalize="none"
          enableErrors={false}
          showCharCounter={false}
          showCount={false}
          onChangeText={(text) => console.log(text)}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onEndEditing={() => console.log('onEndEditing')}
          onSubmitEditing={() => console.log('onSubmitEditing')}
        />
      </View>
      <TButton title='Save any note' containerStyle={tw`bg-[#4FA8A8] w-full mt-12`} />
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({})