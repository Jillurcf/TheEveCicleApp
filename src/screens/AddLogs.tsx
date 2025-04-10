import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconCross } from '../assets/Icons'
import { SvgXml } from 'react-native-svg'
import tw from '../lib/tailwind'
import { useNavigation } from '@react-navigation/native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

type Props = {}
const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };
const AddLogs = (props: Props) => {
    const navigation = useNavigation()
   
    return (
        <View style={tw`p-[4%] flex-1 bg-[#E8F6F6]`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Add log</Text>
                <View></View>
            </View>
            <View>
                <Calendar
                    markingType={'multi-dot'}
                    markedDates={{
                        '2017-10-25': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2017-10-26': { dots: [massage, workout], disabled: true }
                    }}
                />
            </View>
            <StatusBar translucent={false} />
        </View>
    )
}

export default AddLogs

const styles = StyleSheet.create({})