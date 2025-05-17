import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import tw from "../lib/tailwind";




const checkinData = [
  {
    id: "1",
    title: "Symptoms",
    avatars: [
      require("../assets/Imgages/MyTodyCheckin/image1.png"),
      require("../assets/Imgages/MyTodyCheckin/image2.png"),
    ],
    count: "+2",
  },
  {
    id: "2",
    title: "Feelings",
    // emojis: ["😊","😢"],
     avatars: [
      require("../assets/Imgages/MyTodyCheckin/Mood.png"),
      require("../assets/Imgages/MyTodyCheckin/Mood2.png"),
    ],
    count: "+2",
  },
  {
    id: "3",
    title: "Discharge",
    avatars: [
        require("../assets/Imgages/MyTodyCheckin/Vector.png"),
        require("../assets/Imgages/MyTodyCheckin/Vector.png"),
        require("../assets/Imgages/MyTodyCheckin/Vector.png"),
       
      ],
  },
  {
    id: "4",
    title: "Discharge",
    emojis: ["💧", "💧", "💧"],
  },
  {
    id: "5",
    title: "Discharge",
    emojis: ["💧", "💧", "💧"],
  },
];

const CheckInList = () => {
  return (
    <View style={tw`py-8 px-4`}>
      <Text style={tw`text-xl text-[#121221] font-SatoshiBold mb-3`}>My check-in today</Text>
      <FlatList
        data={checkinData}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`flex-row`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={tw`w-24 h-18 justify-center bg-[#FFFFFF] border border-[#CECECF] shadow-lg rounded-lg mr-3 items-center`}>
            <Text style={tw`text-sm font-semibold mb-2`}>{item.title}</Text>
            <View style={tw`flex-row items-center`}>
              {item.avatars ? (
                <View style={tw`flex-row items-center`}>
                  {item.avatars.map((avatar, index) => (
                    <Image
                      key={index}
                      source={avatar}
                      resizeMode="contain"
                      style={[
                        tw`w-6 h-6`,
                        { marginLeft: index === 0 ? 0 : -12 },
                      ]}
                    />
                  ))}
                </View>
              ) : (
                <Text style={tw`text-xl`}>{item.emojis?.join(" ")}</Text>
              )}
              {item.count && <View style={tw`w-5 h-5 bg-[#EAF5F5] rounded-full flex items-center justify-center`}>
                <Text style={tw`ml-2 text-xs font-SatoshiRegular mx-auto text-center text-green-500`}>{item.count}</Text>
                </View>}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CheckInList;
