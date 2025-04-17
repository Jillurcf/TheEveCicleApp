import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../assets/Icons'
import { id } from 'date-fns/locale'

type Props = {}

const MorningDuasAfterWakeUp = ({ navigation }: { navigation: any }) => {

    const getColorById = (id: string | number) => {
        const colors = ['#E5DAE7', '#CCE7DE', '#E7E7E9', '#EACACE'];
        const index = typeof id === 'string'
            ? id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
            : id;
        return colors[index % colors.length];
    };


    const data = [
        {
            id: 1, title: 'Morning dua after wake up',
            descriptionArabic: 'أَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُوْر',
            description: 'Meaning: “All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.” [Sahih-Al-Bukhari, Fathul Bari 11/113; Sahih Muslim 4/2083]'
        },
        {
            id: 2, title: 'Morning dua after wake up',
            descriptionArabic: 'أَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُوْر',
            description: 'Meaning: “All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.” [Sahih-Al-Bukhari, Fathul Bari 11/113; Sahih Muslim 4/2083]'
        },
        {
            id: 3, title: 'Morning dua after wake up',
            descriptionArabic: 'أَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُوْر',
            description: 'Meaning: “All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.” [Sahih-Al-Bukhari, Fathul Bari 11/113; Sahih Muslim 4/2083]'
        },
        {
            id: 4, title: 'Morning dua after wake up',
            descriptionArabic: 'أَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُوْر',
            description: 'Meaning: “All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.” [Sahih-Al-Bukhari, Fathul Bari 11/113; Sahih Muslim 4/2083]'
        },
        {
            id: 5, title: 'Morning dua after wake up',
            descriptionArabic: 'أَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُوْر',
            description: 'Meaning: “All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.” [Sahih-Al-Bukhari, Fathul Bari 11/113; Sahih Muslim 4/2083]'
        },
        {
            id: 6, title: 'Morning dua after wake up',
            descriptionArabic: 'أَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُوْر',
            description: 'Meaning: “All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.” [Sahih-Al-Bukhari, Fathul Bari 11/113; Sahih Muslim 4/2083]'
        },
    ]
    return (
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#E8F6F6', padding: '4%' }}>
            <View style={tw`flex-row items-center justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
                <Text style={tw`text-lg text-black font-SatoshiBold`}>Morning duas after wake up</Text>
                <View></View>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={tw`mt-4 items-center`}

                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        const bgColor = getColorById(item.id);
                        return (
                            (
                                <View style={tw` rounded-lg items-center`}>

                                    <View style={[tw`rounded-2xl w-[95%] p-4`, { backgroundColor: bgColor }]}>
                                        <Text style={tw` w-75 text-right text-gray-600 font-SatoshiRegular mt-1`}
                                            numberOfLines={1}
                                        >{item?.descriptionArabic}

                                        </Text>
                                        <Text style={tw` w-80 text-gray-600 font-SatoshiRegular mt-1`}
                                            numberOfLines={4}
                                        >{item?.description}

                                        </Text>
                                    </View>
                                    <View style={tw`my-4 border-b w-full border-gray-300`}>
                                    
                                    </View>
                                </View>
                            )
                        )
                    }}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
            <StatusBar

                backgroundColor="#E8F6F6"
                translucent={false}

            />
        </ScrollView>
    )
}

export default MorningDuasAfterWakeUp

const styles = StyleSheet.create({})