import { Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg'
import { IconLeftArrow } from '../../assets/Icons'

import { SceneMap, TabView } from 'react-native-tab-view'
import VideoPlayer from 'react-native-video-player'
import LinearGradient from 'react-native-linear-gradient'
import { FlatList } from 'react-native-gesture-handler'
import FirstRouteContent from '../../component/dhikrMeditation/FirstRouteContent'
import SecondRouteContent from '../../component/dhikrMeditation/springGrouth/SecondRouteContent'
import tw from '../../lib/tailwind'
import ThirdRouteContent from '../../component/dhikrMeditation/summerJoy/ThirdRouteContrent'
import FourthRouteContent from '../../component/dhikrMeditation/autumnPeach/FourthRouteContent'
import FifthRouteContent from '../../component/dhikrMeditation/heartMeditation/FifthRouteContent'


const categories = ["Winter care", "Spring grouth", "Summer joy", "Autumn peach", "Heart meditation"]
type Props = {}

const DhikrAndMedition = ({ navigation }: { navigation: any }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Winter care");
  

    const renderCategoryComponent = () => {
        switch (selectedCategory) {
            case 'Winter care':
                return <FifthRouteContent />
            case 'Spring grouth':
                return   <SecondRouteContent />
            case 'Summer joy':
                return  <ThirdRouteContent />
            case 'Autumn peach':
                return <FourthRouteContent />
            case 'Heart meditation':
                return  <FifthRouteContent />
            default:
                return null
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#E8F6F6', padding: '0%', marginTop: -660 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw``}>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item}
                    numColumns={3}
                    columnWrapperStyle={tw``}
                    contentContainerStyle={tw`gap-3 -mb-15`}
                    renderItem={({ item: category }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedCategory(category)}
                            style={tw`mr-2`} // 31% to fit 3 columns with space
                        >
                            <View
                                style={tw`flex-row gap-2 items-center justify-center py-1 w-[25] border border-[#9E9EA4] rounded-2xl ${selectedCategory === category ? 'bg-[#4FA8A8] border-0' : 'bg-none'
                                    }`}
                            >
                                <Text
                                    style={tw` ${selectedCategory === category ? 'text-white font-bold' : 'text-[#646464]'
                                        } mt-1 text-xs text-center font-SatoshiRegular mb-2`}
                                >
                                    {category}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>

            {renderCategoryComponent()}

            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E8F6F6"
                translucent
                ={false}
            />
        </View>
    )
}

export default DhikrAndMedition

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200, // Set the height of the video container
        backgroundColor: '#00B4D8', // Black background for the video container
        borderRadius: 10, // Round corners
        overflow: 'hidden', // Ensure the video fits inside the container
        marginBottom: 20, // Adjust margin if needed
        paddingHorizontal: 20
    },
    video: {
        width: '100%',
        height: '100%', // Make the video fill the container
        borderRadius: 50, // Apply border radius to the video player
    },
});