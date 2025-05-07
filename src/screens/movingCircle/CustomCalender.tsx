import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageBackground,
  Image,
} from "react-native";
import moment from "moment";
import tw from "../../lib/tailwind";
import HormoneChart from "../../component/HomeChart";


interface DayPickerProps {
  selectedDay: number | null;
  onDaySelect: (day: number) => void;
  rotation?: number;
  onScroll?: (dayIndex: number) => void;
}

const ITEM_WIDTH = 50; // Width of each day item

const DayPicker: React.FC<DayPickerProps> = ({
  selectedDay,
  onDaySelect,
  rotation,
  onScroll,
}) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [daysInMonth, setDaysInMonth] = useState<string[]>([]);
  const flatListRef = useRef<FlatList<string>>(null);

  useEffect(() => {
    const days = getDaysInMonth(moment().month(), moment().year());
    setDaysInMonth(days);
  }, []);

  useEffect(() => {
    if (flatListRef.current && selectedDay !== null && selectedDay > 0) {
      const index = selectedDay - 1;
      if (index >= 0 && index < daysInMonth.length) {
        flatListRef.current.scrollToIndex({ animated: true, index });
      }
    }
  }, [selectedDay, daysInMonth]);

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
    <View style={tw`flex-1 `}>
      <View style={tw`w-full justify-end relative`}>
        {/* <HormoneChart /> */}
        <Image source={require('../../assets/Imgages/Today/graphs.png')} style={tw`bottom-10`} />
      </View>

      <View style={tw`w-[99%] left-10 bottom-7 py-4 absolute`}>
        {/* <Text style={tw`text-xl font-bold text-black`}>{moment().format("MMM, YYYY")}</Text> */}

        <FlatList
          ref={flatListRef}
          horizontal
          data={daysInMonth}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            const isSelected = selectedDays.includes(
              parseInt(moment(item).format("D"), 10)
            );
            return (


              <TouchableOpacity
                style={tw`w-[${ITEM_WIDTH}px] items-center py-2 rounded-lg ${isSelected ? "bg-green-300" : ""
                  }`}
                onPress={() => toggleDate(item)}
              >
                  <Text style={tw`text-sm ${isSelected ? "text-white font-medium" : "text-gray-500"}`}>
                  {moment(item).format("ddd")}
                </Text>

                <Text style={tw`text-lg font-medium ${isSelected ? "text-white font-bold" : "text-gray-800"}`}>
                  {moment(item).format("D")}
                </Text>
              
                <View style={tw`h-30 bg-black w-0.2`}></View>
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
    </View>
  );
};

export default DayPicker;
