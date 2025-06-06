import { FlatList, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Iconblad, IconCross, IconEdit } from '../assets/Icons'
import { SvgXml } from 'react-native-svg'
import tw from '../lib/tailwind'
import { useNavigation } from '@react-navigation/native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment'
import MyCheckinToday from '../component/addlogs/MyCheckinToday'
import MySymptoms from '../component/addlogs/MySymptoms'
import MyVirginalDischarge from '../component/addlogs/MyVirginalDischarge'
import MyWinterFlow from '../component/addlogs/MyWinterFlow'
import MyDay from '../component/addlogs/MyDay'
import MyFoodAndNutrition from '../component/addlogs/MyFoodAndNutrition'
import MyDigestion from '../component/addlogs/MyDigestion'
import TButton from '../component/TButton'
import MyNotes from '../component/addlogs/MyNotes'

type Props = {}
interface DayPickerProps {
    selectedDay: number | null;
    onDaySelect: (day: number) => void;
    rotation?: number;
    onScroll?: (dayIndex: number) => void;
}

const ITEM_WIDTH = 65; // Width of each day item
const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

const AddLogs = ({
    selectedDay = null,
    onDaySelect = () => { },
    rotation,
    onScroll = () => { },
}) => {
    const navigation = useNavigation()
    const [selectedDays, setSelectedDays] = useState<number[]>([moment().date()]);
    const [daysInMonth, setDaysInMonth] = useState<string[]>([]);
    const flatListRef = useRef<FlatList<string>>(null);

    useEffect(() => {
        const days = getDaysInMonth(moment().month(), moment().year());
        setDaysInMonth(days);
    }, []);

    // useEffect(() => {
    //     if (flatListRef.current && selectedDay !== null && selectedDay > 0) {
    //         const index = selectedDay - 1;
    //         if (index >= 0 && index < daysInMonth.length) {
    //             flatListRef.current.scrollToIndex({ animated: true, index });
    //         }
    //     }
    // }, [selectedDay, daysInMonth]);
    useEffect(() => {
        if (daysInMonth.length > 0 && flatListRef.current) {
            const index = moment().date() - 1;
            flatListRef.current.scrollToIndex({ animated: true, index });
        }
    }, [daysInMonth]);
    

    const getDaysInMonth = (month: number, year: number): string[] => {
        const startOfMonth = moment({ year, month }).startOf("month");
        const endOfMonth = moment({ year, month }).endOf("month");
        const days: string[] = [];

        let day = startOfMonth;
        while (day <= endOfMonth) {
            days.push(day.format("YYYY-MM-DD"));
            day = day.clone().add(1, "day");
        }
        return days;
    };

    const toggleDate = (date: string) => {
        const dayNumber = parseInt(moment(date).format("D"), 10);
        if (selectedDays.includes(dayNumber)) {
            setSelectedDays(selectedDays.filter((d) => d !== dayNumber));
        } else {
            setSelectedDays([...selectedDays, dayNumber]);
        }
        onDaySelect(dayNumber);
    };

    const onScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const totalWidth = event.nativeEvent.contentSize.width;
        const scrollPercentage = contentOffsetX / totalWidth;
        const totalDays = daysInMonth.length;
        const dayIndex = Math.floor(scrollPercentage * totalDays);
        if (onScroll) {
            onScroll(dayIndex + 1);
        }
    };

    return (
        <ScrollView style={tw`p-[4%] flex-1 bg-[#E8F6F6]`}>
            <View style={tw`flex-row my-4 justify-between`}>
                <View style={tw`w-[10%]`}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={IconCross} />
                </TouchableOpacity>
                </View>
                <View style={tw`w-[70%] items-center`}>
                <Text style={tw`font-SatoshiBold text-[#121221] ml-6 text-xl`}>Add log</Text>
                </View>
                <View style={tw`w-[20%]`}>
                    <TouchableOpacity
                        onPress={() => console.log("LinkDevice")}
                    >
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconEdit} />
                            <Text style={tw`text-[#2B9696] `}>Edit log</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={tw`w-full bg-white rounded-xl mb-4 py-4 items-center justify-center mr-4`}>

                <FlatList
                    ref={flatListRef}
                    horizontal
                    data={daysInMonth}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        const dayNumber = parseInt(moment(item).format("D"), 10);
                        const isSelected = selectedDays.includes(dayNumber);

                        return (
                            <TouchableOpacity
                                style={tw`w-[${ITEM_WIDTH}px] items-center py-2`}
                                onPress={() => toggleDate(item)}
                            >
                                <Text style={tw`text-sm text-black font-medium ${isSelected ? "text-[#D00303]" : "text-gray-800"
                                    }`}>
                                    {isSelected ? "Today" : moment(item).format("ddd")}
                                </Text>

                                {isSelected && (
                                    <Text style={tw`text-center text-[#D00303] text-xs mt-1`}>
                                        • • •
                                    </Text>
                                )}

                                <View>
                                    <Text
                                        style={tw`relative text-lg font-bold mt-1 px-3 py-1 rounded-full ${isSelected ? "bg-[#D00303] text-white" : "text-gray-800"
                                            }`}
                                    >
                                        {dayNumber}
                                    </Text>
                                    {isSelected && <SvgXml style={tw`absolute left-5 -top-1`} xml={Iconblad} />}
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={tw`items-center`}
                    onScroll={onScrollHandler}
                    getItemLayout={(_, index) => ({
                        length: ITEM_WIDTH,
                        offset: ITEM_WIDTH * index,
                        index,
                    })}
                    onScrollToIndexFailed={(info) => {
                        console.warn("Scroll to index failed:", info);
                        if (info.index >= 0 && info.index < daysInMonth.length) {
                            setTimeout(() => {
                                flatListRef.current?.scrollToIndex({
                                    index: info.index,
                                    animated: true,
                                });
                            }, 500);
                        }
                    }}
                />


                {/* <View style={tw`mt-4`}>
          <Text style={tw`text-lg font-semibold text-gray-700`}>Selected Dates:</Text>
          {selectedDays.length > 0 ? (
            <Text style={tw`text-base text-gray-600`}>{selectedDays.join(", ")}</Text>
          ) : (
            <Text style={tw`text-base text-gray-400`}>None</Text>
          )}
        </View> */}
            </View>
            {/* ================My check in today ================= */}
            <MyCheckinToday />
            {/* ================My Symptoms ================= */}
            <View style={tw`mt-6`}>
                <MySymptoms />
            </View>
            {/* ================My virginal Discharge ================= */}
            <View style={tw`mt-6`}>
                <MyVirginalDischarge />
            </View>
            {/* ================My winter flow ================= */}
            <View style={tw`mt-6`}>
                <MyWinterFlow />
            </View>
            {/* ================My day ================= */}
            <View style={tw`mt-6`}>
                <MyDay />
            </View>
            {/* ================My food and nutrition ================= */}
            <View style={tw`mt-6`}>
                <MyFoodAndNutrition />
            </View>
            {/* ================My digestion ================= */}
            <View style={tw`mt-6`}>
                <MyDigestion />
            </View>

            <View style={tw`mt-6`}>
                <MyNotes />
            </View>
            <View style={tw`my-6 w-full items-center`}>
                <TButton title='Save My Log' containerStyle={tw`bg-[#4FA8A8] w-full`} />
            </View>
            <StatusBar translucent={false} />
        </ScrollView>
    )
}

export default AddLogs

const styles = StyleSheet.create({})