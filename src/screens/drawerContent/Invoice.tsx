import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'

type Props = {}

const data = [
    { id: '1', plan: 'Annually', date: '23 Jan, 23', amount: '£29.99', status: 'PAID' },
    { id: '2', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
    { id: '3', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
    { id: '4', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
    { id: '5', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
    { id: '6', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'CANCELED' },
    { id: '7', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'CANCELED' },
]

const StatusBadge = ({ status }: { status: string }) => {
    const isPaid = status === 'PAID'
    return (
        <View style={tw`px-2 py-1 rounded-full ${isPaid ? 'bg-green-100' : 'bg-red-100'}`}>
            <Text style={tw`text-xs font-bold ${isPaid ? 'text-green-700' : 'text-red-700'}`}>
                {status}
            </Text>
        </View>
    )
}

const Invoice = ({navigation}:{navigation:any}) => {
    return (
        <ScrollView style={tw`flex-1 bg-[#E8F6F6] p-4`}>
        <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <SvgXml xml={IconLeftArrow} />
            </TouchableOpacity>
            <Text style={tw`font-SatoshiBold text-xl`}>Billing & subscription</Text>
            <View></View>
        </View>
            <Text style={tw`text-base font-semibold text-gray-800 mb-2 mt-8`}>
                View all your billing history and invoices
            </Text>

            <View style={tw`flex-row justify-between mb-2`}>
                <Text style={tw`text-gray-500 text-xs`}>Invoice ID</Text>
                <Text style={tw`text-gray-500 text-xs`}>Billing Date</Text>
                <Text style={tw`text-gray-500 text-xs`}>Plan</Text>
                <Text style={tw`text-gray-500 text-xs`}>Amount</Text>
                <Text style={tw`text-gray-500 text-xs`}>Status</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={tw`flex-row justify-between items-center py-2 border-b border-gray-200`}>
                        <Text style={tw`text-xs text-gray-700`}>#23456</Text>
                        <Text style={tw`text-xs text-gray-700`}>{item.date}</Text>
                        <Text style={tw`text-xs text-gray-700`}>{item.plan}</Text>
                        <Text style={tw`text-xs text-gray-700`}>{item.amount}</Text>
                        <StatusBadge status={item.status} />
                    </View>
                )}
            />

            <TouchableOpacity style={tw`bg-[#4FA8A8] py-3 rounded-full mt-6 items-center`}>
                <Text style={tw`text-white font-bold`}>Download PDF</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Invoice

const styles = StyleSheet.create({})
