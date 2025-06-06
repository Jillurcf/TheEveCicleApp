import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { IconArticle, IconArticleNonSelect, IconDhikr, IconDhikrSelceted, IconLeftArrow, IconQuran, IconQuranSelected, IconWillingness, IconWillingnessSelected } from '../../assets/Icons'
import MenstrualHealthCicleEducation from '../../component/articles/MenstrualHealthCicleEducation'
import CommonMythAboutMens from '../../component/articles/CommonMythAboutMens'
import WellnessAndSelfCare from '../../component/articles/WellnessAndSelfCare'
import Article from '../../component/sanctum/Article'
import DhikrAndMedition from './DhikrAndMedition'
import QuranicAndPropheticDuas from '../QuranicAndPropheticDuas'

type Props = {}
const categories = [
    { name: 'Articles', icon: IconArticleNonSelect, icon1: IconArticle },
    { name: 'Dhikr & meditations', icon: IconDhikr, icon1: IconDhikrSelceted },
    { name: 'Quranic & prophetic duas', icon: IconQuran, icon1: IconQuranSelected },
    { name: 'Wellness guidance & eBook', icon: IconWillingness, icon1: IconWillingnessSelected },
];

const Articles = ({ navigation, route }: { navigation: any }) => {
    const {title} = route?.params;
    const [selectedCategory, setSelectedCategory] = useState(title);

    const renderCategoryComponent = () => {
        switch (selectedCategory) {
            case 'Articles':
                return <Article />;
            case 'Dhikr & meditations':
              return <DhikrAndMedition />;
            case 'Quranic & prophetic duas':
              return <QuranicAndPropheticDuas/>;
            case 'Wellness guidance & eBook':
              return <WellnessAndSelfCare />;
            default:
                return null;
        }
    };

    return (
        <View style={tw`bg-[#E8F6F6] flex-1 p-[4%]`}>
            <View style={tw`flex-row items-center justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                >
                    <SvgXml xml={IconLeftArrow} />
                </TouchableOpacity>
              
                <View></View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw``}>
                {categories.map(({ name, icon, icon1 }) => (
                    <TouchableOpacity
                        key={name}
                        onPress={() => setSelectedCategory(name)}
                        style={tw`px-1 h-16 rounded-full items-center justify-center} mt-4`}
                    >
                        <View style={tw`flex-row gap-1 items-center ${selectedCategory === name ? 'border-b-2 border-[#84C2C2]' : ''}`}>
                            
                            <SvgXml style={tw`mt-1 mb-1`}  xml={selectedCategory === name ? icon1 : icon} width={15} height={15} />
                            <Text style={tw`${selectedCategory === name ? 'text-black font-bold' : 'text-[#646464]'} mt-1 text-xs text-center font-SatoshiRegular mb-2`}>
                                {name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
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

export default Articles

const styles = StyleSheet.create({})