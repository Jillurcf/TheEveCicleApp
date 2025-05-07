import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import tw from "../lib/tailwind";
import Avatar1 from "../assets/Imgages/MyTodyCheckin/Group.svg";



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
        require("../assets/Imgages/MyTodyCheckin/Group.png"),
        require("../assets/Imgages/MyTodyCheckin/Group.png"),
        require("../assets/Imgages/MyTodyCheckin/Group.png"),
       
      ],
  },
  {
    id: "3",
    title: "Discharge",
    emojis: ["💧", "💧", "💧"],
  },
  {
    id: "3",
    title: "Discharge",
    emojis: ["💧", "💧", "💧"],
  },
];

const CheckInList = () => {
  return (
    <View style={tw`py-8 px-6`}>
      <Text style={tw`text-xl text-[#121221] font-SatoshiBold mb-3`}>My check-in today</Text>
      <FlatList
        data={checkinData}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`flex-row`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={tw`w-30 h-24 justify-center bg-white border border-gray-400 rounded-xl px-1 mr-3 items-center`}>
            <Text style={tw`text-sm font-semibold mb-4`}>{item.title}</Text>
            <View style={tw`flex-row items-center`}>
              {item.avatars ? (
                <View style={tw`flex-row items-center`}>
                  {item.avatars.map((avatar, index) => (
                    <Image
                      key={index}
                      source={avatar}
                      resizeMode="contain"
                      style={[
                        tw`w-6 h-6 rounded-full border-2 border-white`,
                        { marginLeft: index === 0 ? 0 : -10 },
                      ]}
                    />
                  ))}
                </View>
              ) : (
                <Text style={tw`text-xl`}>{item.emojis?.join(" ")}</Text>
              )}
              {item.count && <Text style={tw`ml-2 text-sm font-bold text-green-500`}>{item.count}</Text>}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CheckInList;
