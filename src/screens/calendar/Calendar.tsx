import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'

import { SvgXml } from 'react-native-svg'
import tw from '../../lib/tailwind'
import { IconCopy, IconCross, IconEdit } from '../../assets/Icons'
import MyInteractiveCalendar from '../../component/MyInteractiveCalendar'
import IwtButton from '../../component/IwtButton'
import { useTheme } from '../../context/ThemeContext'


type Props = {}


const Calender = ({ navigation }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    // const renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute,
    // });

    // const routes = [
    //     { key: 'first', title: 'Month' },
    //     { key: 'second', title: 'Year' },
    // ];
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <View style={tw`flex-1 ${isDark ? "bg-black" :"bg-[#E8F6F6] "} p-[4%]`}>
            <View style={tw`flex-row justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>
                <Text style={tw`font-SatoshiBold text-xl`}>Calendar</Text>
                <View>
                    {/* <TouchableOpacity
                        onPress={() => console.log("LinkDevice")}
                    >
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconEdit} />
                            <Text style={tw`text-[#2B9696] text-lg`}>Edit logs</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </View>

            <ScrollView style={tw`flex-1 bg-transparent mt-6`}>

                <MyInteractiveCalendar />


                <View style={tw`bg-white rounded-lg p-4 mt-4 items-center`}>
                    <Text style={tw`text-black text-center text-lg font-SatoshiBold`}>No record found</Text>
                    <Text style={tw`text-black text-center text-xs font-SatoshiBold my-2`}>Tab to add log</Text>
                    <IwtButton
                        onPress={() => navigation.navigate('AddLogs')}
                        containerStyle={tw`bg-[#2B9696] w-[50%] items-center gap-4 pl-6`} titleStyle={tw`font-SatoshiBold`} title='Add logs' svg='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.25 14V7.75H0V6.25H6.25V0H7.75V6.25H14V7.75H7.75V14H6.25Z" fill="white"/>
    </svg>
    '/>
                </View>


            </ScrollView>



        </View>
    )
}




export default Calender

const styles = StyleSheet.create({})