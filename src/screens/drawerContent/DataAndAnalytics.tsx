import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'

type Props = {}

const DataAndAnalytics = ({ navigation }: { navigation: any }) => {
    return (
        < ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
            <View style={tw`flex-row justify-between`}>
                <View style={tw`w-[10%]`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SvgXml xml={IconLeftArrow} />
                    </TouchableOpacity>
                </View>
             <View style={tw`w-[80%] items-center`}>
                   <Text style={tw`font-SatoshiBold text-[#121221] text-xl`}>Data & analytics</Text>
             </View>
                <View style={tw`w-[10%]`}></View>
            </View>
            <View style={tw`bg-white w-full rounded-lg mt-8 p-4`}>
                <Text style={tw`font-SatoshiBold text-[#76767E]`}>Personal information</Text>
                <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Aisha Rahman</Text>
                <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>24 years old</Text>
                <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>aisharahman@gmail.com</Text>
                <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>14 February, 2025</Text>
            </View>
            <View style={tw`bg-white w-full rounded-lg p-4  mt-4`}>
                <Text style={tw`font-SatoshiBold text-[#76767E]`}>Cycle Report</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Current phase</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Ovulation</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Upcoming phase</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Folicular</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Period Type</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Regular</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Last period</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>5 Jan, 2025</Text>
                </View>

            </View>
            <View style={tw`bg-white w-full rounded-lg p-4  mt-4`}>
                <Text style={tw`font-SatoshiBold text-[#76767E]`}>Log Report</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Feelings today</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Self-critical</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Symptoms</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Fatigue, headache</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Verginal discharge</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Egg white</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Winter flow</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Heavy</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Day (activities)</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Prayer, exercise</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Food and nutrition</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Junck foods</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Digestion</Text>
                    <Text style={tw`font-SatoshiBold text-[#3A3A47] mt-2`}>Bloating</Text>
                </View>

            </View>
            <View>
                <TouchableOpacity
                    style={tw`bg-[#4FA8A8] py-3 rounded-full mt-6 items-center`}
                // onPress={downloadPDF} 
                >
                    <Text style={tw`text-white font-bold`}>Download PDF</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F6F6" translucent={false} />
        </ScrollView>
    )
}

export default DataAndAnalytics

const styles = StyleSheet.create({})