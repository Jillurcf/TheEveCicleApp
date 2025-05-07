import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { Iconblad, IconTick } from '../../assets/Icons';
import NoDischargeIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/NoDischarge.svg'
import WateryIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/Watery.svg'
import CreamyIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/Creamy.svg'
import StickyIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/Sticky.svg'
import EggWhiteIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/EggWhite.svg'
import ClumpyIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/ClumpyWhite.svg'
import YellowishIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/Yellowwish.svg'
import SpottingIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/Spotting.svg'
import UnusualColorIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/UnusualColor.svg'
import OdourLessIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/OdourLess.svg'
import StrongIcon from '../../assets/Imgages/AddLogs/MyVirginalDischarge/StrongOdour.svg'

type Props = {}

const MyVirginalDischarge = (props: Props) => {
    const options = [
        
        {
            id: 1,
            title: "No discharge",
            icon: <NoDischargeIcon width={30} height={30}
            />
        },
        {
            id: 2,
            title: "Watery",
            icon: <WateryIcon width={30} height={30}
            />
        },
        {
            id: 3,
            title: "Creamy",
            icon: <CreamyIcon width={30} height={30}
            />
        },
        {
            id: 4,
            title: "Sticky",
            icon: <StickyIcon width={30} height={30}
            />
        },
        {
            id: 5,
            title: "Egg white",
            icon: <EggWhiteIcon width={30} height={30}
            />
        },
        {
            id: 6,
            title: "Clumpy white",
            icon: <ClumpyIcon width={30} height={30}
            />
        },
        {
            id: 7,
            title: "Yellowish",
            icon: <YellowishIcon width={30} height={30}
            />
        },
        {
            id: 8,
            title: "Spotting",
            icon: <SpottingIcon width={30} height={30}
            />
        },
        {
            id: 9,
            title: "Unusual color",
            icon: <UnusualColorIcon width={30} height={30}
            />
        },
        {
            id: 10,
            title: "Odourless",
            icon: <OdourLessIcon width={30} height={30}
            />
        },
        {
            id: 11,
            title: "Strong odour",
            icon: <StrongIcon width={30} height={30}
            />
        },
        
    ];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Toggle option selection
    const toggleOption = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };
    return (
        <View style={tw`bg-white rounded-2xl p-[4%]`}>
            <Text style={tw`text-black text-lg font-SatoshiBold`}>My virginal discharge</Text>
            <View style={tw`my-2 flex-row flex-wrap gap-1`}>
                {options.map((option) =>
                {
                    const isSelected = selectedOptions.includes(option.title);

                    return (
                        <TouchableOpacity
                            key={option.id}
                            onPress={() => toggleOption(option.title)}
                            style={[
                                tw`mb-2 relative rounded-full flex-row items-center gap-2 px-4 py-2`,
                                {
                                    backgroundColor: isSelected ? '#EAF5F5' : '#f2f2f2',
                                    borderColor: isSelected ? '#EAF5F5' : '#ccc',
                                    borderWidth: 1,
                                }
                            ]}
                        >
                           
                            {option.icon}
                            <Text style={{ color: isSelected ? '#2B9696' : 'black', fontSize: 14, marginRight: 10 }}>
                                {option.title}
                            </Text>
                            {isSelected &&   <SvgXml style={tw`absolute right-2`} xml={IconTick}/> }
                          
                        </TouchableOpacity>
                    );
                }
                )}
            </View>
        </View>
    )
}

export default MyVirginalDischarge

const styles = StyleSheet.create({})